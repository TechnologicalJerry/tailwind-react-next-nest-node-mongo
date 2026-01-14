export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/dashboard',
  DASHBOARD_USERS: '/dashboard/users',
  DASHBOARD_PRODUCTS: '/dashboard/products',
  DASHBOARD_PROFILE: '/dashboard/profile',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

export const AUTH_TOKEN_KEY = 'auth_token';
export const USER_KEY = 'user';

export const TOKEN_EXPIRY_DAYS = 7;
