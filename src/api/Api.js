import axios from 'axios';
import { getApiUrl } from '@/utils/env';

const instance = axios.create({
  baseURL: getApiUrl(),
});

class API {
  constructor() {
    this.request = instance.request;
    this.get = instance.get;
    this.post = instance.post;
  }
}

export default new API();
