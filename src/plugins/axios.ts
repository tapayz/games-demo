/**
 * plugins/axios.ts
 *
 * Axios HTTP client configuration and plugin setup
 */

import axios, { type AxiosInstance } from 'axios'
import type { App } from 'vue'
import { API_CONFIG } from '@/config/api'

// Create axios instance with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor - 모든 요청에 Authorization 헤더 자동 추가
axiosInstance.interceptors.request.use(
  (config) => {
    // API_CONFIG.TOKEN이 있으면 Authorization 헤더에 추가
    if (API_CONFIG.TOKEN && config.headers) {
      config.headers.Authorization = API_CONFIG.TOKEN
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor - 기본 에러 핸들링
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // 개발 환경에서 에러 로깅
    if (import.meta.env.DEV) {
      console.error('API Error:', error.response?.data || error.message)
    }

    return Promise.reject(error)
  }
)

// Plugin installation function
export default {
  install (app: App) {
    // Make axios available globally as $http
    app.config.globalProperties.$http = axiosInstance
    app.provide('axios', axiosInstance)
  },
}

// Export the configured axios instance
export { axiosInstance as axios }
