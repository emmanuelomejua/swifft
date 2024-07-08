import axios from 'axios';

export const URL = 'https://swift-tznw.onrender.com'

const SERVER = axios.create({
    baseURL: URL,
    Authorization: 'Bearer'
})

export default SERVER;
