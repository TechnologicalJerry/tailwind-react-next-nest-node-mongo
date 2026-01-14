import { User } from './user';

export interface LoginCredentials {
  identifier: string; // email or username
  password: string;
}

export interface RegisterDto {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  role?: string;
}

export interface ForgotPasswordDto {
  identifier: string; // email or username
}

export interface AuthResponse {
  user: User;
  token: string;
  access_token?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
