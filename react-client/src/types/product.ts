export interface Product {
  _id?: string;
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any; // Allow additional fields
}

export interface CreateProductDto {
  [key: string]: any; // Product schema to be defined based on backend
}

export interface UpdateProductDto extends CreateProductDto {}
