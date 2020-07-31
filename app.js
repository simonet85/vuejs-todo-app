const app = new Vue({
  el: "#app",
  data() {
    return {
      title: "Hello Coding Garden",
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false,
      });
      this.newTodo = "";
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      //splice():remove elements from array , which element(todoIndex) to be rmoved and how many (1)
      this.todos.splice(todoIndex, 1);
    },
    markAll() {
      this.todos.forEach((todo) => {
        todo.done = true;
      });
    },
  },
});
