import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "Sova"
      },
      {
        id: 2,
        title: "Äta"
      },
      {
        id: 3,
        title: "Plugga"
      }
    ]
  },
  mutations: {
    addTodo(state, title) {
      state.todos.push({
        id: Date.now(),
        title: title
      });
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id != id);
    }
  },
  actions: {},
  modules: {}
});
