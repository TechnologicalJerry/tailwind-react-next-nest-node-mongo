'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types/user';
import { LoginCredentials, RegisterDto, AuthResponse } from '@/types/auth';
import { authService } from '@/services/authService';
import { getAuthToken, getUser, clearAuth, setAuthToken, setUser } from '@/lib/auth';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterDto, autoLogin?: boolean) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize auth state from cookies
    const initAuth = () => {
      const savedToken = getAuthToken();
      const savedUser = getUser();
      if (savedToken && savedUser) {
        setToken(savedToken);
        setUserState(savedUser);
      }
      setIsLoading(false);
    };
    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      const response: AuthResponse = await authService.login(credentials);
      setToken(response.token);
      setUserState(response.user);
    } catch (error) {
      throw error;
    }
  };

  const register = async (data: RegisterDto, autoLogin: boolean = true) => {
    try {
      const response: AuthResponse = await authService.register(data, autoLogin);
      if (autoLogin) {
        setToken(response.token);
        setUserState(response.user);
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout(user?._id || user?.id);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearAuth();
      setToken(null);
      setUserState(null);
    }
  };

  const updateUser = (updatedUser: User) => {
    setUserState(updatedUser);
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token && !!user,
        isLoading,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
