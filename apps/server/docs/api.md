# API Endpoints Documentation

This document outlines the available API endpoints for the server application and provides examples on how to test them using `curl`.

All endpoints are prefixed with `/api`.

---

## Authentication Endpoints (handled by Better Auth)

### 1. Register a New User

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Description:** Registers a new user with email and password.
- **Request Body (JSON):**

  ```json
  {
    "name": "Test User",
    "email": "test@example.com",
    "password": "your_password"
  }
  ```

- **Example `curl` command:**

  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{
    "email": "test@example.com",
    "password": "your_password",
    "name": "Test User"
  }' http://localhost:3000/api/auth/register
  ```

### 2. User Login

- **URL:** `/api/auth/login`
- **Request Body (JSON):**

  ```json
  {
    "email": "test@example.com",
    "password": "your_password"
  }
  ```

- **Example `curl` command:**

  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{
    "email": "test@example.com",
    "password": "your_password"
  }' http://localhost:3000/api/auth/login
  ```

  - **Note:** Save the `token` from the response for protected endpoints.

### 3. Get Current User Information

- **Example `curl` command:**

  ```bash
  curl -X GET -H "Authorization: Bearer YOUR_AUTH_TOKEN" http://localhost:3000/api/auth/me
  ```

### 4. User Logout

- **Example `curl` command:**

  ```bash
  curl -X POST -H "Authorization: Bearer YOUR_AUTH_TOKEN" http://localhost:3000/api/auth/sign-out
  ```

- **Authentication:** Requires a valid authentication token in the `Authorization` header (Bearer Token).

---

## User Management Endpoints

These endpoints manage user data and require authentication.

- **Example `curl` command:**

  ```bash
  curl -X GET -H "Authorization: Bearer YOUR_AUTH_TOKEN" http://localhost:3000/api/users
  ```

- **Description:** Retrieves a list of all users.
- **Authentication:** Requires a valid authentication token in the `Authorization` header (Bearer Token).
- **Example `curl` command:**

  ```bash
  curl -X GET -H "Authorization: Bearer YOUR_AUTH_TOKEN" http://localhost:3000/api/users
  ```

- **Example `curl` command:**

  ```bash
  curl -X GET -H "Authorization: Bearer YOUR_AUTH_TOKEN" http://localhost:3000/api/users/USER_ID
  ```

  - Replace `USER_ID` with an actual user's ID.

- **Description:** Retrieves a single user by their ID.
- **Authentication:** Requires a valid authentication token in the `Authorization` header (Bearer Token).
- **Example `curl` command:**

  ```bash
  curl -X GET -H "Authorization: Bearer YOUR_AUTH_TOKEN" http://localhost:3000/api/users/USER_ID
  ```

- **Request Body (JSON):**

  ```json
  {
    "name": "Updated Name",
    "email": "updated@example.com"
  }
  ```

- **Example `curl` command:**
- **Authentication:** Requires a valid authentication token in the `Authorization` header (Bearer Token).
- **Request Body (JSON):**

  ```json
  {
    "name": "Updated Name",
    "email": "updated@example.com"
  }
  ```

- **Example `curl` command:**

  ```bash
  curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_AUTH_TOKEN" -d '{
    "name": "Updated Name",
  ```

- **Example `curl` command:**

  ```bash
  curl -X DELETE -H "Authorization: Bearer YOUR_AUTH_TOKEN" http://localhost:3000/api/users/USER_ID
  ```

  - Replace `USER_ID` with an actual user's ID.

### 4. Delete User

- **URL:** `/api/users/:id`
- **Method:** `DELETE`
- **Description:** Deletes a user by their ID.
- **Authentication:** Requires a valid authentication token in the `Authorization` header (Bearer Token).
- **Example `curl` command:**

  ```bash
  curl -X DELETE -H "Authorization: Bearer YOUR_AUTH_TOKEN" http://localhost:3000/api/users/USER_ID
  ```

  - Replace `USER_ID` with an actual user's ID.
