import axios from 'axios';
import { env } from '../env';

const { baseURL } = env;

const request = axios.create({
  baseURL,
  method: 'post',
});

export { request };
