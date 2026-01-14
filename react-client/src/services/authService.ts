import apiClient from '@/lib/apiClient';
import { LoginCredentials, RegisterDto, ForgotPasswordDto, AuthResponse } from '@/types/auth';
import { setAuthToken, setUser } from '@/lib/auth';

export const authService = {
  async register(data: RegisterDto, autoLogin: boolean = true): Promise<AuthResponse> {
    const response = await apiClient.post<any>('/auth/register', data);
    // Map access_token to token for consistency
    const token = response.data.access_token || response.data.token;
    if (token && autoLogin) {
      setAuthToken(token);
      setUser(response.data.user);
    }
    return {
      ...response.data,
      token: token,
    };
  },

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await apiClient.post<any>('/auth/authenticate', credentials);
    // Map access_token to token for consistency
    const token = response.data.access_token || response.data.token;
    if (token) {
      setAuthToken(token);
      setUser(response.data.user);
    }
    return {
      ...response.data,
      token: token,
    };
  },

  async logout(userId?: string): Promise<void> {
    try {
      await apiClient.post('/auth/logout', userId ? { userId } : {});
    } finally {
      // Clear auth even if request fails
      const { clearAuth } = await import('@/lib/auth');
      clearAuth();
    }
  },

  async forgotPassword(data: ForgotPasswordDto): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>('/auth/forgot-password', data);
    return response.data;
  },
};
