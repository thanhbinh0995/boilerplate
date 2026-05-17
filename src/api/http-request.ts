import axios from 'axios';
import { getAccessToken, getUserInfo, revokeUser } from 'utils/cookie';
import {
  keysToCamelCase,
  keysToSnakeCase,
  windowRedirect,
  dataSerialization,
} from 'utils/helpers';
import { getLocalStorage } from 'utils/storage';
import { DEFAULT_LANGUAGE } from 'config/constants';
import { StatusCodeEnum } from 'enums/app';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};

const AxiosRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  try {
    const token = getAccessToken();
    const language = getLocalStorage<string>('language') || DEFAULT_LANGUAGE;
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.Language = language;
    const isFormData = config.headers['Content-Type'] === 'multipart/form-data';
    if (!isEmpty(config.params)) {
      const params = keysToSnakeCase(config.params);
      config.params = isFormData ? dataSerialization(params) : params;
    }
    if (!isEmpty(config.data)) {
      const data = keysToSnakeCase(config.data);
      config.data = isFormData ? dataSerialization(data) : data;
    }
    return config;
  } catch (error) {
    throw new Error(error as string);
  }
};

class HttpRequest {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    if (this.instance) {
      return this.instance;
    }
    return this.init();
  }

  init(): AxiosInstance {
    const http = axios.create({
      baseURL: API_URL,
      headers,
    });

    http.interceptors.request.use(AxiosRequest, (error) =>
      Promise.reject(error),
    );

    http.interceptors.response.use(
      (response) => {
        if (response.headers['content-type'] === 'application/json') {
          return keysToCamelCase(response.data);
        }
        return response.data;
      },
      (error) => {
        const status = get(error, 'response.status');
        const errorData = get(error, 'response.data');
        switch (status) {
          case StatusCodeEnum.Unauthorized: {
            this.handleUnauthorized();
            break;
          }
          case StatusCodeEnum.ValidationFailed:
          case StatusCodeEnum.GoneRequest:
          case StatusCodeEnum.PreconditionFailed:
          case StatusCodeEnum.BadRequest: {
            return Promise.reject({ ...errorData, status });
          }
          case StatusCodeEnum.Forbidden: {
            windowRedirect(`/403`);
            break;
          }
          case StatusCodeEnum.InternalServerError: {
            windowRedirect(`/500`);
            break;
          }
          case StatusCodeEnum.TooManyRequests: {
            break;
          }
        }
        return Promise.reject({ ...errorData, code: error.code });
      },
    );

    this.instance = http;
    return http;
  }

  handleUnauthorized(): void {
    const userInfo = getUserInfo();
    if (userInfo) {
      revokeUser();
      windowRedirect('/sign-in');
    }
  }

  request<T, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  patch<T, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.patch<T, R>(url, data, config);
  }

  delete<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }
}

export default new HttpRequest();
