<template>
  <div id="app">
    <div class="todo-container">
      <Header />
      <!--    v-on:add-todo="addTodo" -->
      <AddTodo />
      <!--  v-on:del-todo="deleteTodo" -->
      <TodoList class="todo-list" v-bind:todos="todos" />
      <!--  -->
    </div>
  </div>
</template>

<script>
import Header from "./components/Header"; // import this from the file
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: { Header, TodoList, AddTodo },

  computed: {
    todos() {
      return this.$store.state.todos;
    }
    /*  remainingTodos() {
      return this.todos.filter(todo => !todo.completed);
    },
    changeToSingular() {
      const singular = this.todos.filter(todo => !todo.completed).length;
      if (singular <= 1) {
        return "todo";
      } else {
        return "todos";
      }
    }*/
  } /* ,
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
      //   this.todos = [...this.todos, newTodo]
    }
  } */
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-container {
  width: 100%;
  margin: auto;
  max-width: 560px;
  border: 1px solid #000;
}
</style>
