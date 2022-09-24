<template>
  <div id="addTask" class="addtask">
    <h6 class="text-center text-2xl font-semibold mb-2">Add Task</h6>
    <div class="text-center text-xl mb-3 font-medium">
      <router-link
        class="bg-green-500 w-fit p-2 rounded cursor-pointer"
        v-bind:to="{ name: 'Home' }"
        >Home</router-link
      >
    </div>
    <div class="form text-center">
        <form @submit="onSubmit">
            <input type="text" name="task" v-model="title" placeholder="Task" 
            class="border-2 border-solid rounded border-teal-200 p-1 outline-none mb-2"> <br>
            <button class="bg-fuchsia-300 p-1 border-none rounded">Add Task</button>
        </form>
    </div>
  </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default{
        name: 'addTask',
        data(){
            return{
                title: ''
            }
        },
        components:{},
        methods: {
            ...mapActions(['addTask']),
            onSubmit(e){
                e.preventDefault();
                this.addTask(this.title)
                this.$router.push({name: 'Home'})
            }
        }
    }
</script>