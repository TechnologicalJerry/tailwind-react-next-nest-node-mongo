# NestJS Server API List

This document provides a comprehensive list of all available API endpoints from the NestJS backend server for frontend integration.

## Base URL

The base URL for all API endpoints is:
```
http://localhost:9000
```

**Note:** Update this URL based on your environment configuration. The server runs on port 9000 by default.

## Authentication

All protected endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## API Endpoints

### 1. Root/Health Check

#### GET `/`
Check if the server is running.

**Request:**
- Method: `GET`
- Headers: None required

**Response:**
```json
"Hello World!"
```

---

### 2. Authentication Endpoints (`/auth`)

#### POST `/auth/register`
Register a new user account.

**Request:**
- Method: `POST`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "userName": "string (min 3 characters)",
  "firstName": "string (min 2 characters)",
  "lastName": "string (min 2 characters)",
  "email": "string (valid email)",
  "phoneNumber": "string (valid phone format)",
  "password": "string (min 8 characters)",
  "confirmPassword": "string",
  "role": "string (optional)"
}
```

**Response:**
- Success: User object with token
- Error: Validation errors or conflict errors

---

#### POST `/auth/authenticate`
Login/authenticate a user.

**Request:**
- Method: `POST`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "identifier": "string (email or username)",
  "password": "string (min 8 characters)"
}
```

**Response:**
- Success: User object with JWT token
- Error: Unauthorized if credentials are invalid

---

#### POST `/auth/logout`
Logout a user (invalidates session).

**Request:**
- Method: `POST`
- Headers: 
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>` (Required)
- Body (optional):
```json
{
  "userId": "string (MongoDB ObjectId, optional)"
}
```

**Note:** If `userId` is not provided, it will use the user ID from the JWT token.

**Response:**
- Success: Logout confirmation
- Error: BadRequest if user ID not found

---

#### POST `/auth/forgot-password`
Request password reset.

**Request:**
- Method: `POST`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "identifier": "string (email or username)"
}
```

**Response:**
- Success: Password reset instructions sent
- Error: User not found

---

#### POST `/auth/testing`
Testing endpoint (for development purposes).

**Request:**
- Method: `POST`
- Headers: `Content-Type: application/json`
- Body: Varies based on TestingDto

**Response:**
- Varies

---

#### GET `/auth`
Get all authentication records (if applicable).

**Request:**
- Method: `GET`
- Headers: None required

**Response:**
- Array of authentication records

---

#### GET `/auth/:id`
Get a specific authentication record by ID.

**Request:**
- Method: `GET`
- Headers: None required
- Parameters:
  - `id`: number (authentication record ID)

**Response:**
- Authentication record object

---

#### DELETE `/auth/:id`
Delete an authentication record by ID.

**Request:**
- Method: `DELETE`
- Headers: None required
- Parameters:
  - `id`: number (authentication record ID)

**Response:**
- Success confirmation

---

### 3. Users Endpoints (`/users`)

#### POST `/users`
Create a new user.

**Request:**
- Method: `POST`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "userName": "string (min 3 characters)",
  "firstName": "string (min 2 characters)",
  "lastName": "string (min 2 characters)",
  "email": "string (valid email)",
  "phoneNumber": "string (valid phone format)",
  "password": "string (min 8 characters)",
  "confirmPassword": "string (optional)",
  "role": "string (optional)"
}
```

**Response:**
- Success: Created user object
- Error: Validation errors

---

#### GET `/users`
Get all users.

**Request:**
- Method: `GET`
- Headers: None required

**Response:**
- Array of user objects

---

#### GET `/users/:id`
Get a specific user by ID.

**Request:**
- Method: `GET`
- Headers: None required
- Parameters:
  - `id`: number (user ID)

**Response:**
- User object

---

#### PATCH `/users/:id`
Update a user by ID.

**Request:**
- Method: `PATCH`
- Headers: `Content-Type: application/json`
- Parameters:
  - `id`: number (user ID)
- Body (all fields optional):
```json
{
  "userName": "string (min 3 characters)",
  "firstName": "string (min 2 characters)",
  "lastName": "string (min 2 characters)",
  "email": "string (valid email)",
  "phoneNumber": "string (valid phone format)",
  "password": "string (min 8 characters)",
  "confirmPassword": "string",
  "role": "string"
}
```

**Response:**
- Success: Updated user object
- Error: Validation errors or not found

---

#### DELETE `/users/:id`
Delete a user by ID.

**Request:**
- Method: `DELETE`
- Headers: None required
- Parameters:
  - `id`: number (user ID)

**Response:**
- Success confirmation

---

### 4. Products Endpoints (`/products`)

#### POST `/products`
Create a new product.

**Request:**
- Method: `POST`
- Headers: `Content-Type: application/json`
- Body:
```json
{}
```

**Note:** The CreateProductDto is currently empty. Check the backend for the actual product schema.

**Response:**
- Success: Created product object
- Error: Validation errors

---

#### GET `/products`
Get all products.

**Request:**
- Method: `GET`
- Headers: None required

**Response:**
- Array of product objects

---

#### GET `/products/:id`
Get a specific product by ID.

**Request:**
- Method: `GET`
- Headers: None required
- Parameters:
  - `id`: number (product ID)

**Response:**
- Product object

---

#### PATCH `/products/:id`
Update a product by ID.

**Request:**
- Method: `PATCH`
- Headers: `Content-Type: application/json`
- Parameters:
  - `id`: number (product ID)
- Body:
```json
{}
```

**Note:** The UpdateProductDto extends CreateProductDto. Check the backend for the actual product schema.

**Response:**
- Success: Updated product object
- Error: Validation errors or not found

---

#### DELETE `/products/:id`
Delete a product by ID.

**Request:**
- Method: `DELETE`
- Headers: None required
- Parameters:
  - `id`: number (product ID)

**Response:**
- Success confirmation

---

## Swagger Documentation

The server includes Swagger/OpenAPI documentation. You can access it at:
```
http://localhost:9000/api/docs
```

This provides interactive API documentation with request/response schemas and the ability to test endpoints directly.

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "statusCode": 400,
  "message": ["validation error messages"],
  "error": "Bad Request"
}
```

### 401 Unauthorized
```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### 404 Not Found
```json
{
  "statusCode": 404,
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "statusCode": 500,
  "message": "Internal server error"
}
```

## Notes

1. **ID Format**: User and Product IDs appear to be numeric in the controllers, but MongoDB typically uses ObjectId strings. Verify the actual ID format with the backend team.

2. **Authentication**: Most endpoints (except public ones like register, login, forgot-password) require JWT authentication via the `Authorization: Bearer <token>` header.

3. **Validation**: The server uses class-validator for request validation. Ensure all required fields meet the validation criteria before sending requests.

4. **CORS**: Ensure the backend has CORS configured to allow requests from your frontend origin.

5. **Environment Variables**: The server port (default: 9000) can be configured via environment variables.

## Integration Example

```typescript
// Example API client usage
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9000';

// Login example
async function login(identifier: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/auth/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier, password }),
  });
  
  if (!response.ok) {
    throw new Error('Login failed');
  }
  
  return response.json();
}

// Protected endpoint example
async function getUsers(token: string) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  
  return response.json();
}
```
