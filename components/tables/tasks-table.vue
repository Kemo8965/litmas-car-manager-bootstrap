<template>
  <div>
    <b-overlay
      :show="busy"
      rounded
      opacity="0.8"
      spinner-type="grow"
      spinner-variant="info"
      class="block"
      @hidden="onHidden"
    >

    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div>
          <div class="float-end">
            <form class="form-inline mb-3">
              <label class="my-1 me-2" for="order-selectinput">Tasks</label>
              <select class="custom-select my-1" id="order-selectinput">
                <option selected>All</option>
                <option value="1">Done</option>
                <option value="2">Pending</option>
              </select>
            </form>
          </div>
          <button
            type="button"
            class="btn btn-success waves-effect waves-light mb-3"
            v-b-modal.modal-task
          >
           <i class="mdi mdi-plus-circle me-1"></i> Add New Task
          </button>

          

           <button ref="button"  
                  :disabled="busy" 
                   variant="primary"
                    @click="refresh" 
                    type="button" 
                    class="btn btn-info mb-3">
               <i class="mdi mdi-refresh-circle"></i>
              
               Refresh
           </button>

             
          <b-overlay
            :show="busy"
            rounded
            opacity="0.8"
            spinner-type="grow"
            spinner-variant="info"
            class="block"
            @hidden="onHidden"
          > 
            

          <b-modal
            id="modal-task"
            centered
            title="Add a new task"
            title-class="font-18"
            hide-footer
          >
            <h5>Add a task</h5>
            <b-form v-model="taskForm">
              <b-input
                v-model="taskDescription"
                placeholder="Description..."
              ></b-input>

           
              <h5 class="mt-4"> Priority Level</h5>
              <b-form-select v-model="selectPriority" :options="optionsPriority" class="mb-3 col-12">
            <!-- This slot appears above the options from 'options' prop -->
            <template #first>
                <b-form-select-option  :value="null" disabled>-- Please select an option --</b-form-select-option>
            </template>
            </b-form-select>


             <h5 class="mt-4">Task Assigned To</h5>
       
              <b-input
                v-model="assignTask"
                placeholder="Who is assigned to this task?"
              ></b-input>


              <b-button
                @click="onSubmit"
                class="my-4 "
                size="lg"
                variant="success"
              >
                <i class="uil uil-plus me-2"></i>
                Add
              </b-button>
            </b-form>
          </b-modal>

           </b-overlay>
           
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Your Tasks</h4>
                <div class="row mt-4">
                  <div class="col-sm-12 col-md-6">
                    <div id="tickets-table_length" class="dataTables_length">
                      <label class="d-inline-flex align-items-center">
                        Show&nbsp;
                        <b-form-select
                          v-model="perPage"
                          size="sm"
                          :options="pageOptions"
                        ></b-form-select
                        >&nbsp;entries
                      </label>
                    </div>
                  </div>
                  <!-- Search -->
                  <div class="col-sm-12 col-md-6">
                    <div
                      id="tickets-table_filter"
                      class="dataTables_filter text-md-end"
                    >
                      <label class="d-inline-flex align-items-center">
                        Search:
                        <b-form-input
                          v-model="filter"
                          type="search"
                          class="form-control form-control-sm ml-2"
                        ></b-form-input>
                      </label>
                    </div>
                  </div>
                  <!-- End search -->
                </div>
                <!-- Table -->

               
                <div class="table-responsive mb-0 ">
                  <b-table
                    :items="tasks"
                    :loading= "loading"
                    :fields="fields"
                    responsive="sm"
                    :per-page="perPage"
                    :current-page="currentPage"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    :filter="filter"
                    :filter-included-fields="filterOn"
                    @filtered="onFiltered"
                  >

                   <template v-slot:cell(selectPriority)="data">
                      <div
                        class="badge badge-pill bg-soft-success font-size-12"
                        :class="{
                          'bg-soft-danger': data.item.selectPriority === 'High',
                          'bg-soft-warning': data.item.selectPriority === 'Medium',
                          'bg-soft-success': data.item.selectPriority === 'Low'
                        }"
                      >
                        {{ data.item.selectPriority }}
                      </div>
                    </template>

                    <template v-slot:cell(status)="data">
                      <div
                        class="badge badge-pill bg-soft-success font-size-12"
                        :class="{
                          'bg-soft-warning': data.item.status === 'Pending',
                          'bg-soft-success': data.item.status === 'Completed'
                        }"
                      >
                        {{ data.item.status }}
                      </div>
                    </template>

                      <template v-slot:cell(action)>
                      <div>
                         <b-button variant="outline-info" class="mx-2 xs" @click="completeTask">
                            <i  v-b-tooltip.hover title="Mark as completed" class="  uil uil-check"></i> 
                         </b-button>

                          
                         <b-button  id="tooltip-top" variant="outline-danger" class="mx-2 xs" @click="deleteTask">
                           
                                 <i v-b-tooltip.hover title="Delete"  class="uil uil-trash-alt"></i> 
                                 
                         </b-button>

                      </div>
                    </template>

                  
                  </b-table>

                 
                </div>
                <div class="row">
                  <div class="col">
                    <div
                      class="dataTables_paginate paging_simple_numbers float-end"
                    >
                      <ul class="pagination pagination-rounded mb-0">
                        <!-- pagination -->
                        <b-pagination
                          v-model="currentPage"
                          :total-rows="rows"
                          :per-page="perPage"
                        ></b-pagination>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          
                 
    </div>
      
    </b-overlay>
   
  </div>
</template>


<script>
/**
 * Orders component
 */
import Spinner from '../../pages/inventory/Spinner.vue'
import { mapFields } from 'vuex-map-fields'
import { mapActions, mapGetters } from 'vuex'
import Swal from "sweetalert2";

export default {
    components: {
      Spinner
    },

  head() {
    return {
      title: `${this.title} |Litmas1.0`,
      
    };
  },
  data() {
    return {

       optionsPriority: [
          { value: 'High', text: 'High' },
          { value: 'Medium', text: 'Medium' },
          { value: 'Low', text: 'Low' },
         ],

        busy: false,
        timeout: null,

            taskForm:{
              taskDescription:'',
              selectPriority:'',
              assignTask:''  
            },

            
     
      title: "Tasks",
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "Tasks",
          active: true
        },

        
        
      ],


      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,

    

      fields: [
        // {
        //   key: "check",
        //   label: ""
        // },
        // {
        //   key: "id",
        //   label: "Task Id"
        // },
        {
          key: "date",
          sortable: true
        },
        {
          key: "taskDescription",
          label: "Task ",
          sortable: true
        },

        // {
        //   key: "status",
        //   label: "Status",
        //   sortable: true
        // },

         {
          key: "selectPriority",
          label: "Priority",
          sortable: true,
       
        },

        
         {
          key: "assignTask",
          label: "Assigned To",
          sortable: true,
         
        },

        "action"
      ]
    };
  },

  
  computed: {

      ...mapFields('taskData', [
      'taskForm',
      'taskForm.taskDescription',
      'taskForm.selectPriority',
      'taskForm.assignTask'  
      
      
  ]),

     ...mapGetters('taskData', {
      loading: 'loading',
      tasks: 'allTasks',
    }),
    //  isEmpty() {
    //  return this.tasks.length === 0
    // },

     rows() {
          //  return this.tasks.length;
        },

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.tasks
    },

  },
  mounted() {
    // Set the initial number of items
  // this.totalRows = this.tasks.length;
   //this.totalRows = this.items.length;
  },
  methods: {

    ...mapActions('taskData', ['addNewTask','getAllTasks', 'load']),

     async refresh(){
      this.busy = true
      await this.getAllTasks();
      this.busy = false
 
    },


    async onSubmit(){
      try {
        this.busy = true
        await this.addNewTask();
       // console.log(taskForm.data)
       await this.addTask();
       await this.clearForm();
       this.busy = false

      } catch (error) {
        await this.errorMsg();
      }
    },

    async addTask() {
      this.addedTask();
      this.clearForm();
      console.log("Task Added");
    },

    async completeTask(){
      this.completedTask();
      console.log("Task Successfully Completed!");
    },

   async deleteTask(){
      this.deletedTask();
      console.log("Task deleted!");
    },
   async addedTask() {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task Successfully Added!",
        showConfirmButton: false,
        timer: 2000
      });
    },

   async completedTask() {
      Swal.fire({
        position: "bottom-start",
        icon: "success",
        title: "Task Successfully Completed!",
        showConfirmButton: false,
        timer: 2000
      });
    },

   async  deletedTask() {
      Swal.fire({
        position: "bottom-end",
        icon: "warning",
        title: "Task Deleted!",
        showConfirmButton: false,
        timer: 2000
      });
    },

   async errorMsg() {
      Swal.fire({
        position: "bottom-end",
        icon: "error",
        title: "Please Check Your Details again!",
        showConfirmButton: false,
        timer: 2000
      });
    },

    clearForm() {
        
        this.taskForm ={
              taskDescription:null,
              selectPriority:null,
              assignTask:null  
            }
    },
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

     setTimeout(callback) {
        this.clearTimeout()
        this.timeout = setTimeout(() => {
          this.clearTimeout()
          callback()
        }, 5000)
      },
  },
  
     
     
      

  
};
</script>

