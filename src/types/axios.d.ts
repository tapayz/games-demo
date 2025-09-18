/**
 * types/axios.d.ts
 *
 * TypeScript declarations for axios global access
 */

import type { AxiosInstance } from 'axios'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $http: AxiosInstance
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: AxiosInstance
  }
}

// Make this file a module
export {}
