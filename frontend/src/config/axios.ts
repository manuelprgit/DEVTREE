import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_URL_API
})

api.interceptors.request.use( (config) => {
    const token = localStorage.getItem('LOGIN_TOKEN');
    if(token) config.headers.Authorization = `Bearer ${token}`; 
    return config
})


export {api}
