import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "Sova",
        completed: false
      },
      {
        id: 2,
        title: "Äta",
        completed: false
      },
      {
        id: 3,
        title: "Plugga",
        completed: false
      }
    ]
  },
  mutations: {
    addTodo(state, title) {
      state.todos.push({
        id: Date.now(),
        title: title,
        completed: false
      });
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id != id);
    },
    editTodo(state, newTodo) {
      let id = newTodo.id;
      let newTitle = newTodo.userInput;
      let updateEdit = state.todos.find(todo => todo.id == id);
      updateEdit.title = newTitle;
    }
  },

  actions: {},
  modules: {}
});
