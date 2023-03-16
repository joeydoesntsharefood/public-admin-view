import axios from 'axios'

const baseURL = 'http://localhost:5562'

// const baseURL = 'https://agriland11971.c42.integrator.host/services'

const app = axios.create({ baseURL })

app.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

export default app