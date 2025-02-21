import axios from 'axios';

const baseUrl= 'http://localhost:9000';

const request = axios.create({
   baseUrl,
});

export default request;
