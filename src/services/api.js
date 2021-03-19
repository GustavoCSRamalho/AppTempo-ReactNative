import axios from 'axios';

//https://api.hgbrasil.com/weather?key=0f8a529a&lat=-23.682&lon=-46.875

export const key = '0f8a529a'

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;