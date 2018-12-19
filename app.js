const app = new Vue({
  el: '#app',  
  data: {
    title: 'Hello t0shifollow!',
    newTodo: '',
    todos: []
  },
  methods: {
    addTodo() {
        this.todos.push({
          title: this.newTodo,
          done: false
        })
    }
  },
});