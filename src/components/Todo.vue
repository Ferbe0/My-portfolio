<script>
export default{
    name: 'Todo',
    data(){
        return{
            task: '',
            editedTask: null,
            tasks: [
                
            ]
        }
    },
    methods: {
        submitTask(){
            if(this.task.length === 0) return;

            if(this.editedTask === null){
                this.tasks.push({
                    name: this.task,
                    status: 'to do'
                })
            }else{
                this.tasks[this.editedTask].name = this.task;
                this.editedTask = null;
            }
            this.task = '';
        },
        editTask(index){
            this.task = this.tasks[index].name;
            this.editedTask = index;
        },  
        deleteTask(index){
            this.tasks.splice(index, 1);

        }
    }
};
</script>
<template>

    <div class="container w-50 todo-box">
        <h2 class="text-center mt-5">Vue Todo App</h2>
        <div class="d-flex">
            <input type="text" v-model="task" placeholder="Enter Task" class="form-control" >
            <button class="btn btn-warning rounded-0" @click="submitTask">SUBMIT</button>
        </div>

        <table class="table table-bordered mt-5">
    <thead>
        <tr>
        <th scope="col">Task</th>
        <th scope="col">Status</th>
        <th scope="col" class="text-center">#</th>
        <th scope="col" class="text-center">#</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
        <th scope="row">{{ task.name }}</th>
        <td>{{ task.status }}</td>
        <td>
            <div>
                <button class="btn btn-info w-100 text-white" @click="editTask(index)">EDIT</button>
            </div>
        </td>
        <td>
            <div @click="deleteTask(index)">
                <button class="btn btn-danger w-100">DELETE</button>
            </div>
        </td>
        </tr>
        
    </tbody>
    </table>

    </div>

</template>

<style>

.todo-box{
    background: white;  
    padding: 30px 20px;
    margin-top: 45px;
}

</style>