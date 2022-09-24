<template>
  <div class="homeV text-center pt-2">
    <h2 class="text-2xl font-semibold mb-2">Todo List</h2>
    <div class="text-center text-2xl mb-3 font-medium">
      <router-link class="bg-yellow-500 w-fit p-2 rounded cursor-pointer" v-bind:to="{name: 'AddTodo'}">Add Task</router-link>
    </div>
    <div class="toos place-content-center place-items-center">
      <FilterTodo />
      <Todos :todos="todos" v-for="todos in allTodos" :key="todos.id" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import { mapGetters } from 'vuex'; old method to use getters
import Todos from "@/components/Todos";
import { mapActions } from "vuex";
import FilterTodo from "@/components/FilterTodo.vue";
//import AddTodo from "./AddTodo.vue";

export default {
  name: "HomeView",
  components: {
    Todos,
    FilterTodo,
    //AddTodo
},
  methods: {
    ...mapActions(['fetchTodos'])
  },
  computed: {
    allTodos() {
      return this.$store.getters.allTodos;
    }, //mapGetters(['allTodos'])
  },
  created(){
    this.fetchTodos()
  }
};
</script>