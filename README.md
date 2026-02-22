# To-Do List API

This project is a RESTful API for a To-Do List application, built using Node.js, Express, and MongoDB. It provides a complete system for user registration and authentication using JWT, along with CRUD operations (Create, Read, Update, Delete) for managing user-specific tasks.

## ✨ Features

- **User Authentication:** Sign up and login using JWT (JSON Web Tokens).
- **Protected Routes:** All task-related endpoints require authentication.
- **Task Management (CRUD):**
  - Create a new task.
  - Retrieve all tasks for the logged-in user.
  - Update task details (title, description, status, address).
  - Delete a task.
- **Input Validation:** Uses `express-validator` to validate all incoming data.
- **Centralized Error Handling:** Custom middleware to handle errors consistently.
- **Organized Structure:** Separation of Concerns between Controllers, Services, Models, and Routes.

---

## 🛠️ Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JSON Web Token (`jsonwebtoken`)
- **Password Hashing:** `bcryptjs`
- **Validation:** `express-validator`
- **Environment Variables:** `dotenv`
- **CORS:** `cors`

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- MongoDB (Local or Cloud/Atlas)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd ToDo
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create Environment Variables (`.env`):**
    Create a new file named `.env` in the root directory and add the following variables:

    ```env
    # Server Configuration
    BACKEND_PORT=6000
    NODE_ENV=development

    # MongoDB Connection
    MONGO_URI=mongodb://127.0.0.1:27017/todo

    # JWT Configuration
    JWT_SECRET=_spider__
    JWT_EXPIRE=30d

    # Bcrypt Configuration
    SALT_ROUNDS=12
    ```

4.  **Start the server:**
    ```bash
    npm run dev
    npm start
    ```
    The server will start on the port defined in `.env`.

---

## 📖 API Documentation

For detailed API documentation, please refer to api.md.
