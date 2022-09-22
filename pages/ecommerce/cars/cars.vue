<script>
    /**
     * Orders component
     */

     import { mapActions, mapGetters } from 'vuex'
    export default {
      head() {
        return {
          title: `${this.title} | Litmas Car Manager`,
        };
      },
      data() {
        return {

         
          modalShow: false,
          title: "Cars",
          items: [
            {
              text: "Inventory",
            },
            {
              text: "Cars",
              active: true,
            },
          ],

          cars:[
           
           
          ],
          
          // orderData: [
          //   {
          //     id: "BAB5009",
          //     make: "Toyota",
          //     model: "Land Cruiser",
          //     engine_no: "H89007200",
          //     status: "Paid",
          //   },
          //   {
          //     id: "ABX3059",
          //     make: "Toyota",
          //     model: "Hilux",
          //     engine_no: "L89007200",
          //     status: "Paid",
          //   },
          //   {
          //     id: "BAB5009",
          //     make: "Nissan",
          //     model: "X-Trail",
          //     engine_no: "H89007200",
          //     status: "Paid",
          //   },
            
          //   {
          //     id: "BAB5009",
          //     make: "Toyota",
          //     model: "Mark X",
          //     engine_no: "H89007200",
          //     status: "In garage",
          //   },
          //   {
          //     id: "BAB5009",
          //     make: "Toyota",
          //     model: "Mark X",
          //     engine_no: "H89007200",
          //     status: "In garage",
          //   },
          //   {
          //     id: "BAJ909",
          //     make: "BMW",
          //     model: "X1",
          //     engine_no: "H89007200",
          //     status: "In garage",
          //   },
          //   {
          //     id: "BAA",
          //     make: "Merecedes Benz",
          //     model: "C 200",
          //     engine_no: "H89007200",
          //     status: "Paid",
          //   },
          //   {
          //     id: "BAA123",
          //     make: "Toyota",
          //     model: "Noah",
          //     engine_no: "H89007200",
          //     status: "Engaged",
          //   },
          //   {
          //     id: "BLB59",
          //     make: "Toyota",
          //     model: "Vitz",
          //     engine_no: "H89007200",
          //     status: "Paid",
          //   },
          //   {
          //     id: "BAB5009",
          //     make: "Toyota",
          //     model: "Mark X",
          //     engine_no: "H89007200",
          //     status: "Unavailable",
          //   },
          //   {
          //     id: "AAB509",
          //     make: "Nissan",
          //     model: "Murano",
          //     engine_no: "H89007200",
          //     status: "Engaged",
          //   },
          // ],

          //  orderData:[
             
          //   ],
          totalRows: 1,
          currentPage: 1,
          perPage: 10,
          pageOptions: [5, 10, 25, 50, 100],
          filter: null,
          filterOn: [],
          sortBy: "age",
          sortDesc: false,
          fields: [
            
            {
              key: "id",
              label: "Licence No.",
            },
            {
              key: "make",
              label:"Make",
              sortable: true,
            },

            {
              key: "model",
              label:"Model",
              sortable: true,
            },
            
            {
              key: "engine_no",
              label:"Engine No.",
              sortable: true,
            },

            {
              key: "chasis_no",
              label:"Chasis No.",
              sortable: true,
            },

            {
              key: "status",
              label: "Status",
              sortable: true,
            },
            "action",
          ],
        };
      },
      middleware: "authentication",
      computed: {

        ...mapGetters('carData', {
        loading: 'loading',
        cars: 'allCars',
      }),
        /**
         * Total no. of records
         */
        rows() {
          return this.cars.length;
        },

       cars() {
        return this.isEmpty ? [] : this.cars
         }, 
      },
      mounted() {
        // Set the initial number of items
        this.totalRows = this.cars.length;
      },
      methods: {
        /**
         * Search the table data with search input
         */


         ...mapActions('carData', ['addNewCar','getAllCars', 'load']),

         async refresh(){
    //  this.isLoading = true
      await this.getAllCars();
   //   this.isLoading = false
 
    },

         submit(){
          console.log("Added!")
         },
        onFiltered(filteredItems) {
          // Trigger pagination to update the number of buttons/pages due to filtering
          this.totalRows = filteredItems.length;
          this.currentPage = 1;
        },
      },
    };
    </script>
    
    <template>
      <div>
        <PageHeader :title="title" :items="cars" />
        <div class="row">
          <div class="col-12">
            <div>
              <div class="float-end">
                <form class="form-inline mb-3">
                  <label class="my-1 me-2" for="order-selectinput">Orders</label>
                  <select class="custom-select my-1" id="order-selectinput">
                    <option selected>All</option>
                    <option value="1">Engaged</option>
                    <option value="2">In garage</option>
                  </select>
                </form>
              </div>
              <button
              v-b-modal.modal-1
                type="button"
                class="btn btn-success waves-effect waves-light mb-3"
              >
              
              <i class="mdi mdi-plus me-1">  </i> Add New Car
             
              </button>
              <b-modal ok-only ok-variant="danger" ok-title="Close" @click="submit" id="modal-1" title="New Car Details">
                <b-form v-model="carForm">

                  <b-label>Make</b-label>
                  <b-input placeholder="make" v-model="make" class="mb-2"></b-input>
                  

                  <b-label>Model</b-label>
                  <b-input placeholder="model" v-model="model" class="mb-2"></b-input>

                  <b-label>Year of make</b-label>
                  <b-input v-model="yearOfMake"  placeholder="year of make" class="mb-2"></b-input>

                 
                  
                  <b-label>Date Purchased</b-label>
                  <b-datepicker
                  class="mb-2"
                  
                      placeholder="Click to select..."
                      v-model="datePurchased"
                      >
                  </b-datepicker>

                  <b-label>Licence Number </b-label>
                  <b-input class="mb-2" 
                    type="text" 
                    v-model="registrationNumber" 
                    placeholder="eg. BAB4500">
                  </b-input>

                  <b-label>Engine Number </b-label>
                  <b-input class="mb-2" v-model="engineNumber" placeholder="Engine No."> </b-input>

                  <b-label>Chasis Number </b-label>
                  <b-input class="mb-2" v-model="chasisNumber" placeholder="Chasis No."> </b-input>
                  
                  <b-label>Color </b-label>
                  <b-input class="mb-2" v-model="color" placeholder="Color"> </b-input>
                  
                  <b-button class="mt-2" variant="success" @click="submit">Add</b-button>
                </b-form>
              </b-modal>

              <button
               @click="refresh"
                type="button"
                class="btn btn-info waves-effect waves-light mb-3"
              >
                <i class="mdi mdi-refresh"></i> Refresh
              </button>

            </div>
            <div class="table-responsive mb-0">
              <div class="row">
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
              
              <pre>{{ cars }}</pre>
              <b-table
                table-class="table table-centered datatable table-card-list"
                thead-tr-class="bg-transparent"
                :items="cars"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
                show-empty
              >
               
                <template v-slot:cell(id)="data">
                  <a
                    href="javascript: void(0);"
                    class="text-dark fw-bold"
                    >{{ data.item.registrationNumber }}</a
                  >
                </template>
    
                <template v-slot:cell(make)="data">
                 {{ data.item.data.make }}
                </template>

                <template v-slot:cell(model)="data">
                 {{ data.item.model }}
                </template>

                <template v-slot:cell(engine_no)="data">
                 {{ data.item.engineNumber }}
                </template>

                <template v-slot:cell(chasis_no)="data">
                 {{ data.item.chasisNumber }}
                </template>

                

                <template v-slot:cell(status)="data">
                  <div
                    class="badge badge-pill bg-soft-success font-size-12"
                    :class="{
                      'bg-soft-danger': data.item.carStatus === 'Unavailable',
                      'bg-soft-warning': data.item.carStatus === 'In garage',
                    }"
                  >
                    {{ data.item.carStatus }}
                  </div>
                </template>
                <template v-slot:cell(action)>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <a
                        href="javascript:void(0);"
                        class="px-2 text-primary"
                        v-b-tooltip.hover
                        title="Edit"
                      >
                        <i class="uil uil-pen font-size-18"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="javascript:void(0);"
                        class="px-2 text-danger"
                        v-b-tooltip.hover
                        title="Delete"
                      >
                        <i class="uil uil-trash-alt font-size-18"></i>
                      </a>
                    </li>
                  </ul>
                </template>

                <template #empty="scope">
                  <h4>{{ scope.emptyText }}</h4>
                </template>
              </b-table>
            </div>
            <div class="row">
              <div class="col">
                <div class="dataTables_paginate paging_simple_numbers float-end">
                  <ul class="pagination pagination-rounded">
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
    </template>
    