import { createApp} from "vue"
import Todos from "./api/todos";
import "./assets/css/main.css"

const apiTodos = new Todos()

async function exec(){
  const todos = await apiTodos.inde()

  const ul = document.querySelector("ul.todos")

  todos.forEach((todo) =>{

  })
}
exec()

const app = createApp({
    data(){
      return{
         todos:[]
      }
    },
    created(){
      console.log()
    },
   
})

app.mount("#app")