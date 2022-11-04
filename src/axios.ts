import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:44369/api'
});

instance.defaults.headers.common['Authorization'] = window.localStorage.getItem('token');

export default instance;