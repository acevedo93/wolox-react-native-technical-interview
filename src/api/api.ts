import axios from 'axios';

export const booksApi = axios.create({
  baseURL: 'http://localhost:3000',
});

export default booksApi;
