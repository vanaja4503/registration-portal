import axios from "axios"

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
})

export const registerUser = async (userData) => {
  const response = await api.post("/users", userData)

  return response.data
}