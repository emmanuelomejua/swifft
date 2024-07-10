import axios from 'axios';
import { getToken } from '../store/token';

export const URL = 'https://swift-tznw.onrender.com'
const token = getToken()

const SERVER = axios.create({
    baseURL: URL,
    Authorization: `Bearer ${token}`
})

export default SERVER;
