// src/api/httpService.ts
import axiosInstance from './axiosConfig';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export const httpGet = async <T = unknown>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.get(url, config);
    return response.data;
  } catch (error) {
    throw extractAxiosError(error);
  }
};

export const httpPost = async <T = unknown>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.post(
      url,
      data,
      config,
    );
    return response.data;
  } catch (error) {
    throw extractAxiosError(error);
  }
};

export const httpPut = async <T = unknown>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.put(
      url,
      data,
      config,
    );
    return response.data;
  } catch (error) {
    throw extractAxiosError(error);
  }
};

export const httpDelete = async <T = unknown>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.delete(url, config);
    return response.data;
  } catch (error) {
    throw extractAxiosError(error);
  }
};

const extractAxiosError = (error: unknown): Error => {
  const axiosError = error as AxiosError;
  if (axiosError.response) {
    return new Error(
      axiosError.response.data?.message ||
        axiosError.response.statusText ||
        'API Error',
    );
  }
  return new Error(axiosError?.message || 'Unexpected Error');
};
