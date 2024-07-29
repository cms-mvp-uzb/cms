import { AxiosRequestConfig } from 'axios'

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const httpConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_API_URL ?? '',
  headers: {
    'Accept': 'application/json'
  }
}