import axios from "../utils/axios";

export default class Todos {
  // Obtém a lista de todos da API
  async index() {
    const response = await axios.get("/todos");
    return response.data;
  }

  // Cria um novo todo na API
  async store({ text, done }) {
    const response = await axios.post("/todos", { text, done });
    return response.data;
  }

  // Atualiza um todo existente na API
  async update({ id, text, done }) {
    const response = await axios.put(`/todos/${id}`, { text, done });
    return response.data;
  }

  // Remove um todo da API
  async destroy({ id }) {
    await axios.delete(`/todos/${id}`);
  }
}
