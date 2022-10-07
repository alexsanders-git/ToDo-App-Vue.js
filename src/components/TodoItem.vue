<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed">
      <strong>{{index + 1}}</strong>
      {{todo.title}}
    </span>
    <button class="btn-delete" v-on:click="$emit('remove-item', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number,
  },
}
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
}

.done {
  text-decoration: line-through;
}

input {
  margin-right: 1rem;
}

.btn-delete {
  background: red;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-weight: 700;
  cursor: pointer;
  transition: all .25s ease-in-out;
}

.btn-delete:hover {
  background: rgb(226, 25, 25);
}
</style>