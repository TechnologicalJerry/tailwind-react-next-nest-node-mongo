import apiClient from '@/lib/apiClient';
import { User, CreateUserDto, UpdateUserDto } from '@/types/user';

export const userService = {
  async getAllUsers(): Promise<User[]> {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
  },

  async getUserById(id: string): Promise<User> {
    const response = await apiClient.get<User>(`/users/${id}`);
    return response.data;
  },

  async createUser(data: CreateUserDto): Promise<User> {
    const response = await apiClient.post<User>('/users', data);
    return response.data;
  },

  async updateUser(id: string, data: UpdateUserDto): Promise<User> {
    const response = await apiClient.patch<User>(`/users/${id}`, data);
    return response.data;
  },

  async deleteUser(id: string): Promise<void> {
    await apiClient.delete(`/users/${id}`);
  },
};
