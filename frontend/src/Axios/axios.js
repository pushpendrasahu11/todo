import axios from "axios"
const instance = axios.create({
    baseURL:"https://todo-v9rz.onrender.com/api"
})
export default instance
