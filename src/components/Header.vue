<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <h3>You have {{ counter }} {{ changeTodoWord }} left</h3>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    counter: Number,
    changeTodoWord: String
  },

  data: () => ({
    title: "TodoApp"
  })
};
</script>

<style lang="css" scoped>
.header {
  background: red;
  padding: 1rem;
  text-align: center;
}

h1,
h3 {
  color: #fff;
}
</style>
