import axios from 'axios';

const SERVER_API_URL = "http://localhost:4000";

const SERVER_API = axios.create(
    {
        baseURL: SERVER_API_URL
    }
)

export {
    SERVER_API
}