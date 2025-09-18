/**
 * config/api.ts
 *
 * API 기본 설정
 */

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.crypted-pay.com',
  TOKEN: import.meta.env.VITE_API_TOKEN || '',
} as const