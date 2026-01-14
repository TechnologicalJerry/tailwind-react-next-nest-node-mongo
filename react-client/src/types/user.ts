export interface User {
  _id?: string;
  id?: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: 'admin' | 'supervisor' | 'user';
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateUserDto {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword?: string;
  role?: string;
}

export interface UpdateUserDto {
  userName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
}
