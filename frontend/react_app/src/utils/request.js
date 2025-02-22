import axios from 'axios';

const baseURL= 'http://localhost:80';

const request = axios.create({
   baseURL,
});

export default request;
