<template>
  <form v-on:submit.prevent="addTodo">
    <input type="text" placeholder="Add new todo" v-model="userinput" />
    <button>Add</button>
  </form>
</template>

<script>
export default {
  name: "AddTodo",
  data: () => ({
    userinput: ""
  }),

  methods: {
    addTodo() {
      this.$store.commit("addTodo", this.userinput);
    }
    /* addTodo() {
      const newTodo = {
        id: Date.now(),
        title: this.userinput,
        completed: false
      };
      if (this.userinput !== "") {
        this.$emit("add-todo", newTodo);
        this.userinput = "";
      }
    } */
  }
};
</script>

<style lang="css" scoped>
form {
  display: flex;
  width: 100%;
}
input {
  width: 80%;
  padding: 12px;
  font-size: 17px;
  border: 1px solid #ccc;
}

button {
  width: 20%;
  border: none;
  background: green;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
}
</style>
