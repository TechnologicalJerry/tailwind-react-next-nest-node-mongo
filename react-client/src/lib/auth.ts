import Cookies from 'js-cookie';
import { AUTH_TOKEN_KEY, USER_KEY, TOKEN_EXPIRY_DAYS } from '@/constants';
import { User } from '@/types/user';

export const setAuthToken = (token: string): void => {
  Cookies.set(AUTH_TOKEN_KEY, token, { expires: TOKEN_EXPIRY_DAYS });
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }
};

export const getAuthToken = (): string | undefined => {
  const token = Cookies.get(AUTH_TOKEN_KEY);
  if (token) return token;
  if (typeof window !== 'undefined') {
    return localStorage.getItem(AUTH_TOKEN_KEY) || undefined;
  }
  return undefined;
};

export const removeAuthToken = (): void => {
  Cookies.remove(AUTH_TOKEN_KEY);
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }
};

export const setUser = (user: User): void => {
  Cookies.set(USER_KEY, JSON.stringify(user), { expires: TOKEN_EXPIRY_DAYS });
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
};

export const getUser = (): User | null => {
  const userStr = Cookies.get(USER_KEY);
  if (userStr) {
    try {
      return JSON.parse(userStr) as User;
    } catch {
      // invalid cookie, try local storage
    }
  }

  if (typeof window !== 'undefined') {
    const localUserStr = localStorage.getItem(USER_KEY);
    if (localUserStr) {
      try {
        return JSON.parse(localUserStr) as User;
      } catch {
        return null;
      }
    }
  }
  return null;
};

export const removeUser = (): void => {
  Cookies.remove(USER_KEY);
  if (typeof window !== 'undefined') {
    localStorage.removeItem(USER_KEY);
  }
};

export const clearAuth = (): void => {
  removeAuthToken();
  removeUser();
};

export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};
