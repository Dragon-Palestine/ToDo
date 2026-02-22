# API Documentation

All requests and responses are in JSON format.

## 👤 Authentication

**`POST /api/auth/register`**

- **Description:** Register a new user.
- **Body:**
  ```json
  {
    "name": "Your Name",
    "email": "user@example.com",
    "password": "password123"
  }
  ```

**`POST /api/auth/login`**

- **Description:** Login existing user and return JWT token.
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

## 📝 Tasks

> **Note:** All these routes require `Authorization: Bearer <token>` in the Headers.

**`GET /api/tasks/list`**

- **Description:** Retrieve all tasks for the logged-in user.

**`POST /api/tasks/add`**

- **Description:** Add a new task.
- **Body:**
  ```json
  {
    "title": "New Task Title",
    "description": "A description for the new task.",
    "address": "Task Location"
  }
  ```

**`PUT /api/tasks/update/:id`**

- **Description:** Update an existing task. You can send any field to update.
- **Body (Example):**
  ```json
  {
    "title": "Updated Task Title",
    "completed": true
  }
  ```

**`DELETE /api/tasks/remove/:id`**

- **Description:** Delete a specific task.
