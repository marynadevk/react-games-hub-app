import axios, { AxiosRequestConfig } from "axios";
import { envConfig } from '../config';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export const axiosInstance = axios.create({
  baseURL: envConfig.apiUrl,
  params: {
    key: envConfig.apiKey,
  },
});

class apiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default axiosInstance;
