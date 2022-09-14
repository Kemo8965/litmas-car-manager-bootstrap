<template>
    <div>
        <div>
      <b-tabs content-class="mt-3">
        <!-- <b-tab title="New Task" active ><div>
            
              <AddNewTask/>
            </div>
            </b-tab> -->
    
            <b-tab title="View Your Tasks"><div>
             <TasksTable/>
            </div>
            </b-tab>
    
        
      </b-tabs>
    </div>
    </div>
    </template>
    
    <script>
    
    import AddNewTask from '../../components/forms/add-new-task.vue'
    import TasksTable from '../../components/tables/tasks-table.vue';
    
    
    
    export default {
        head() {
            return {
                title: `${this.title} | Litmas1.0`,
            };
        },
        data() {
            return {
                title: "Inventory List",
                components: { AddNewTask, TasksTable },
            };
        },
        components: { TasksTable }
    }
    
    </script>