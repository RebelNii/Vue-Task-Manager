import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    todos:[]
  },
  getters: {
    allTodos(state){
      return state.todos
    }//using getters to fetch state
  },
  //used to change state data
  mutations: {
    setTodos(state,payload){
      state.todos = payload
    },

    newTodo(state,payload){
      state.todos.unshift(payload)
    },

    removeTodo(state,id){
      state.todos = state.todos.filter((todo) => todo.id !== id)
    }
  },
  //used to fetch data
  actions: {
    //get todos
    async fetchTodos({commit}) {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log(resp.data);
      commit('setTodos',resp.data)
    },
      //create task
    async addTask({commit},title){
      const res = await axios.post('https://jsonplaceholder.typicode.com/todos',{
        title,completed:false});
        //this.$router.push({name: 'Home'})
      commit('newTodo',res.data)
    },
    //delete task
    async deleteTodo({commit},id){
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      console.log(id)
      commit('removeTodo',id)
    },
    //filter todo
    async filterTodo({commit},e){
      console.log(e)
      const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)//this is how we get value of selected option
      console.log(limit)//confirm value
      const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

      commit('setTodos',resp.data)
    }
  },
  modules: {
  }
})
