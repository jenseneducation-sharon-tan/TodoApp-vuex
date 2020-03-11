<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <div>
      <input type="checkbox" v-model="todo.completed" />
      <h2
        spellcheck="false"
        contenteditable="true"
        v-on:keydown.enter="updateTodo($event, todo)"
        v-on:blur="updateTodo($event, todo)"
      >
        {{ todo.title }}
      </h2>
    </div>
    <button @click="deleteTodo(todo.id)">Delete</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object
  },
  methods: {
    updateTodo(e, todo) {
      e.preventDefault();
      todo.title = e.target.innerText;
      e.target.blur();
    },

    deleteTodo(id) {
      this.$store.commit("removeTodo", id);
    }
  }
};
</script>

<style lang="css" scoped>
.todo-item {
  width: 100%;
  padding: 1rem;
  display: flex;
  background: #eee;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}

div {
  display: flex;
  align-items: center;
}

div > h2 {
  margin-left: 1rem;
}

.completed h2 {
  text-decoration: line-through;
}
</style>
