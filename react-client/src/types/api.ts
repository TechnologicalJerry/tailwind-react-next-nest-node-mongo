export interface ApiError {
  statusCode: number;
  message: string | string[];
  error?: string;
}

export interface ApiResponse<T = any> {
  data?: T;
  error?: ApiError;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
