import axios from 'axios'

const baseURL = 'http://localhost:8000'

// 'https://agriland11971.c42.integrator.host/services'

const app = axios.create({ baseURL })

export default app