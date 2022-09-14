<script>
    /**
     * Orders component
     */
    export default {
      head() {
        return {
          title: `${this.title} | Litmas Car Manager`,
        };
      },
      data() {
        return {
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
          orderData: [
            {
              id: "BAB5009",
              make: "Toyota",
              model: "Land Cruiser",
              engine_no: "H89007200",
              status: "Paid",
            },
            {
              id: "BAB5009",
              make: "Nissan",
              model: "X-Trail",
              engine_no: "H89007200",
              status: "Paid",
            },
            
            {
              id: "BAB5009",
              make: "Toyota",
              model: "Mark X",
              engine_no: "H89007200",
              status: "In garage",
            },
            {
              id: "BAB5009",
              make: "Toyota",
              model: "Mark X",
              engine_no: "H89007200",
              status: "In garage",
            },
            {
              id: "BAJ909",
              make: "BMW",
              model: "X1",
              engine_no: "H89007200",
              status: "Unavailable",
            },
            {
              id: "BAA",
              make: "Merecedes Benz",
              model: "C 200",
              engine_no: "H89007200",
              status: "Paid",
            },
            {
              id: "BAA123",
              make: "Toyota",
              model: "Noah",
              engine_no: "H89007200",
              status: "Paid",
            },
            {
              id: "BLB59",
              make: "Toyota",
              model: "Vitz",
              engine_no: "H89007200",
              status: "Paid",
            },
            {
              id: "BAB5009",
              make: "Toyota",
              model: "Mark X",
              engine_no: "H89007200",
              status: "Unavailable",
            },
            {
              id: "AAB509",
              make: "Nissan",
              model: "Murano",
              engine_no: "H89007200",
              status: "Paid",
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
            {
              key: "check",
              label: "",
            },
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
        /**
         * Total no. of records
         */
        rows() {
          return this.orderData.length;
        },
      },
      mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
      },
      methods: {
        /**
         * Search the table data with search input
         */
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
        <PageHeader :title="title" :items="items" />
        <div class="row">
          <div class="col-12">
            <div>
              <div class="float-end">
                <form class="form-inline mb-3">
                  <label class="my-1 me-2" for="order-selectinput">Orders</label>
                  <select class="custom-select my-1" id="order-selectinput">
                    <option selected>All</option>
                    <option value="1">Active</option>
                    <option value="2">Unpaid</option>
                  </select>
                </form>
              </div>
              <button
                type="button"
                class="btn btn-success waves-effect waves-light mb-3"
              >
                <i class="mdi mdi-plus me-1"></i> Add New Car
              </button>

              <button
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
    
              <b-table
                table-class="table table-centered datatable table-card-list"
                thead-tr-class="bg-transparent"
                :items="orderData"
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
                <template v-slot:cell(check)="data">
                  <div class="custom-control custom-checkbox text-center">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      :id="`contacusercheck${data.item.id}`"
                    />
                    <label
                      class="custom-control-label"
                      :for="`contacusercheck${data.item.id}`"
                    ></label>
                  </div>
                </template>
                <template v-slot:cell(id)="data">
                  <a
                    href="javascript: void(0);"
                    class="text-dark fw-bold"
                    >{{ data.item.id }}</a
                  >
                </template>
    
                <template v-slot:cell(name)="data">
                  <a href="#" class="text-body">{{ data.item.name }}</a>
                </template>
                <template v-slot:cell(status)="data">
                  <div
                    class="badge badge-pill bg-soft-success font-size-12"
                    :class="{
                      'bg-soft-danger': data.item.status === 'Unavailable',
                      'bg-soft-warning': data.item.status === 'In garage',
                    }"
                  >
                    {{ data.item.status }}
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
    