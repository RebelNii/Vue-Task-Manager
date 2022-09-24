<template>
  <div class="todos grid grid-cols-1 gap-4 mb-1 relative">
    <div
      class="todo border border-solid border-teal-400 rounded bg-teal-400 p-2 font-semibold text-lg relative"
    >
      {{ todos.title }} <i @click="deleteTodo(todos.id)" 
      class="fa-solid fa-trash absolute right-2 bottom-2 text-white text-sm cursor-pointer"></i>
    </div>
  </div>
</template>

<script>
    import { mapActions } from 'vuex';
export default {
  name: "Todos",
  props: ['todos'],
  components: {},
  methods: {
    ...mapActions(['deleteTodo'])
  }
};
</script>

<style scoped>
    
</style>