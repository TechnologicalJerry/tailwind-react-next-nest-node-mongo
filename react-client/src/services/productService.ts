import apiClient from '@/lib/apiClient';
import { Product, CreateProductDto, UpdateProductDto } from '@/types/product';

export const productService = {
  async getAllProducts(): Promise<Product[]> {
    const response = await apiClient.get<Product[]>('/products');
    return response.data;
  },

  async getProductById(id: string): Promise<Product> {
    const response = await apiClient.get<Product>(`/products/${id}`);
    return response.data;
  },

  async createProduct(data: CreateProductDto): Promise<Product> {
    const response = await apiClient.post<Product>('/products', data);
    return response.data;
  },

  async updateProduct(id: string, data: UpdateProductDto): Promise<Product> {
    const response = await apiClient.patch<Product>(`/products/${id}`, data);
    return response.data;
  },

  async deleteProduct(id: string): Promise<void> {
    await apiClient.delete(`/products/${id}`);
  },
};
