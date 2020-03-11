<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <div>
      <input type="checkbox" v-model="todo.completed" />
      <h2 v-if="!editMode">{{ todo.title }}</h2>
      <input
        v-else
        type="text"
        v-model="newTodo.userInput"
        v-on:keydown.enter="editTodo"
      />
      <!-- <div v-show="edit == false">
        <input
          type="text"
          spellcheck="false"
          v-model="userInput"
          v-show="edit == true"
        />
      </div> -->
    </div>
    <button @click="editMode = !editMode">Edit</button>
    <button @click="deleteTodo(todo.id)">Delete</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      editMode: false,
      newTodo: {
        userInput: this.todo.title,
        id: this.todo.id
      }
    };
  },

  props: {
    todo: Object
  },
  methods: {
    editTodo() {
      this.$store.commit("editTodo", this.newTodo);
      this.editMode = false;
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
