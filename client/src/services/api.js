import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})

export const getCoins = () =>{
    return api.get('/coins')
}

export const getCoinHistory = (coinId) =>{
    return api.get(`/coins/${coinId}/history`)
}

export default api;