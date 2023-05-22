import { createApp } from "vue";
import Todos from "./api/todos";
import "./assets/css/main.css";

const apiTodos = new Todos();

async function exec() {
  const todos = await apiTodos.inde();

  const ul = document.querySelector("ul.todos");

  todos.forEach((todo) => {
    // Use a variável "ul" aqui para manipular a lista
    ul.innerHTML += `<li>${todo}</li>`;
  });

  const app = createApp({
    data() {
      return {
        todos: [],
        form:{
          text:"",
          done:false
        }
      };
    },
    created() {
      this.fetchTodos();
    },
    methods: {
      async fetchTodos() {
        this.todos = await apiTodos.inde();
        console.log(this.todos);
      },
      async createTodo(){
        const data = await apiTodos.store(this.form)
        this.todos.push(data)

        this.form.text = ""
        this.form.done = false
      }
    },
  });

  app.mount("#app");
}

exec();

