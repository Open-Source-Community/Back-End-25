# Todo App Backend - Task Description

## Objective
Build a simple backend for a Todo App using **Node.js**, **Express**, and **MongoDB (local instance)**. The backend must handle user authentication, authorization, and CRUD operations for todos.

## Requirements

### 1. Database Setup
- Use **MongoDB (local instance)**.
- Create two collections:
  - `users` collection to store user details.
  - `todos` collection to store todo items.

### 2. Authentication Routes
Implement the following authentication routes:

#### `POST /signup` - Register a new user
**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "User registered successfully"
}
```

#### `POST /signin` - Login user and return a token
**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```
**Response:**
```json
{
  "success": true,
  "token": "jwt_token",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  }
}
```

#### `POST /signout` - Logout user
**Response:**
```json
{
  "success": true,
  "message": "User signed out successfully"
}
```

### 3. Authentication & Authorization
- Use **bcrypt** to hash user passwords before storing them in the database.
- Implement authentication and authorization mechanisms.
- Ensure protected routes can only be accessed by authenticated users.
- Handle authentication using **middleware**.
- Store the user ID in `req` for use in subsequent middleware functions.

### 4. Todo Routes

#### `POST /add-todo` - Add a new todo
**Request Body:**
```json
{
  "title": "string",
  "description": "string",
  "status": "pending | completed"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Todo added successfully",
  "todo": {
    "id": "string",
    "title": "string",
    "description": "string",
    "status": "pending | completed",
    "userId": "string"
  }
}
```

#### `PUT /change-status/:id` - Change the status of a todo
**Request Body:**
```json
{
  "status": "pending | completed"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Todo status updated successfully"
}
```

#### `DELETE /delete-todo/:id` - Delete a specific todo
**Response:**
```json
{
  "success": true,
  "message": "Todo deleted successfully"
}
```

#### `GET /getById/:id` - Retrieve a specific todo by its ID
**Response:**
```json
{
  "success": true,
  "todo": {
    "id": "string",
    "title": "string",
    "description": "string",
    "status": "pending | completed",
    "userId": "string"
  }
}
```

### 5. User Routes

#### `GET /get-todos` - Retrieve all todos for the authenticated user
**Response:**
```json
{
  "success": true,
  "todos": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "status": "pending | completed",
      "userId": "string"
    }
  ]
}
```

#### `GET /get-remain-todo` - Retrieve only the remaining (incomplete) todos for the authenticated user
**Response:**
```json
{
  "success": true,
  "remainingTodos": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "status": "pending",
      "userId": "string"
    }
  ]
}
```

## Important Notes
- **Use middleware** for authentication to verify user identity before accessing protected routes.
- Store the authenticated user's ID in the `req` object so that it can be accessed in subsequent middleware.
- Follow best practices for structuring your project.

## Mo7sens 
- Use environment variables (`.env`) to store sensitive data (e.g., database connection string, JWT secret).
- Write good readme file for your project. 
- Add any extra logic in you code. 

## Submission
- Submit your project as a GitHub repository.
- Create file by your name save github repo link in it. 

