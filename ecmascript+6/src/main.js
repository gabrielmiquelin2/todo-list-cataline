// Importar o método createApp do Vue
import { createApp } from "vue";

// Importar a classe Todos do arquivo "todos.js" na pasta "api"
import Todos from "./api/todos";

// Importar o arquivo CSS principal
import "./assets/css/main.css";

// Instanciar a classe Todos
const apiTodos = new Todos();

// Função assíncrona para executar o código
async function exec() {
  // Obter as tarefas da API
  const todos = await apiTodos.index();

  // Criar a instância do aplicativo Vue
  const app = createApp({
    // Dados do aplicativo
    data() {
      return {
        todos: [], // Lista de tarefas
        form: {
          text: "", // Texto da tarefa
          done: false // Estado da conclusão da tarefa
        }
      };
    },
    // Método executado ao criar a instância Vue
    created() {
      this.fetchTodos(); // Buscar as tarefas novamente
    },
    // Métodos do aplicativo
    methods: {
      // Buscar as tarefas da API e atualizar a lista de tarefas
      async fetchTodos() {
        this.todos = await apiTodos.index();
        console.log(this.todos);
      },
      // Criar uma nova tarefa
      async createTodo() {
        const data = await apiTodos.store(this.form); // Enviar a nova tarefa para a API
        this.todos.push(data); // Adicionar a nova tarefa à lista

        // Limpar os campos do formulário
        this.form.text = "";
        this.form.done = false;
      },
      // Remover uma tarefa da lista
      async deleteTodo(todo) {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
          this.todos.splice(index, 1); // Remover a tarefa da lista
          await apiTodos.destroy(todo); // Chamar o método de remoção da API
        }
      }
    },
    // Template do aplicativo Vue
    template: `
      <div id="app">
        <form @submit.prevent="createTodo">
          <input type="text" placeholder="Todo" v-model="form.text" />
          <label class="checkbox-input">
            {{ form.done ? "Concluída" : "Não concluída" }}
            <input type="checkbox" v-model="form.done" />
            <span class="checkmark"></span>
          </label>
          <button type="submit">Adicionar</button>
        </form>

        <ul class="todos">
          <span class="todos-title">Todos</span>
          <li :class="['todo', { done: todo.done }]" v-for="todo in todos" :key="todo.id">
            <label class="checkbox-input">
              <input type="checkbox" v-model="todo.done" />
              <span class="checkmark"></span>
            </label>
            <span class="todo-text">{{ todo.text }}</span>
            <a class="todo-delete" @click="deleteTodo(todo)"></a>
          </li>
        </ul>
      </div>
    `
  });

  // Montar o aplicativo Vue no elemento com o ID "app"
  app.mount("#app");
}

// Executar a função "exec"
exec();
