import axios from "../utils/axios";

class Todos {
  async getAll() {
    const response = await axios.get("/todos");
    return response.data;
  }

  async create(todo) {
    const response = await axios.post("/todos", todo);
    return response.data;
  }

  async update(id, todo) {
    const response = await axios.put(`/todos/${id}`, todo);
    return response.data;
  }

  async delete(id) {
    await axios.delete(`/todos/${id}`);
  }
}

export default Todos;




// // CATALINE
// import axios from "../utils/axios"

// export default class Todos{
//    async indexedDB(){
//     const { data }  = await axios.get("/todos")
//     return data 
//    }

//    async store({text, done}){
//       const { data }  = await axios.post("/todos", {text, done})
//       return data 
//    }

//    async update({id,text, done}){
//       const { data }  = await axios.put(`/todos/${id}`, {text, done})
//       return data 
//    }

//    async destroy({id}){
//     await axios.delete(`/todos/${id}`)
      
//    }
// }

