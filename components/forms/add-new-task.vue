<template>
  <div>
      <div class="card col-6">
        <div class="card-body ">
            <h5>Add a task</h5>
            <b-form id="modalForm" v-model="taskForm">
              <b-input
                v-model="taskDescription"
                placeholder="Description..."
             />

           
              <h5 class="mt-4"> Priority Level</h5>
              <b-input
                v-model="selectPriority"
                placeholder="Low, Medium or High"
              />


             <h5 class="mt-4">Task Assigned To</h5>
       
              <b-input
                v-model="assignTask"
                placeholder="Who is assigned to this task?"
              />


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
        </div>
      </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'
import Swal from "sweetalert2";

export default {
    data(){
      return{

         title: "Tasks",
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "Tasks",
          active: true
        }
      ],
      }
    },

      computed: {

      ...mapFields('taskData', [
      'taskForm',
      'taskForm.taskDescription',
      'taskForm.selectPriority',
      'taskForm.assignTask' ,

      ]
      
      ),
      },

       methods: {

    ...mapActions('taskData', ['addNewTask','getAllTasks', 'load']),

     async load(){
      
      await this.load();
    
    },


    async onSubmit(){
      try {
        
        await this.addNewTask();
        console.log(taskForm.data)
         await this.addTask();

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
      document.getElementById("modalForm").reset();
    },
 }
}
</script>

<style>

</style>