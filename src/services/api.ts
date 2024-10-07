import axios, { AxiosRequestConfig } from 'axios';
import { envConfig } from '../config';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
export const axiosInstance = axios.create({
  baseURL: envConfig.apiUrl,
  params: {
    key: envConfig.apiKey,
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config);
    return res.data;
  };

  get = async (id: number | string) => {
    const res = await axiosInstance
      .get<T>(this.endpoint + '/' + id);
    return res.data;
  };
}

export default ApiClient;
