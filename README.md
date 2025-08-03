# Arvyax

A full-stack session management application with user authentication, built with React frontend and Node.js backend.

## 🚀 Overview

Arvyax is a modern web application that allows users to create, manage, and share sessions. Users can register, authenticate, create sessions as drafts, edit them, and publish them for others to view. The application features a clean, responsive interface and secure authentication system.

## 🛠 Tech Stack

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcryptjs

### Frontend

- **Framework**: React + vite
- **State Management**: Redux Toolkit & React Redux
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **State Persistence**: Redux Persist


## 🎯 API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint    | Description             |
| ------ | ----------- | ----------------------- |
| POST   | `/register` | Create new user account |
| POST   | `/login`    | User login              |

### Sessions (`/api`)

| Method | Endpoint                  | Description             | Auth Required |
| ------ | ------------------------- | ----------------------- | ------------- |
| GET    | `/sessions`               | Get all public sessions | ❌            |
| GET    | `/my-sessions`            | Get user's sessions     | ✅            |
| GET    | `/my-sessions/:id`        | Get specific session    | ✅            |
| POST   | `/my-sessions/save-draft` | Save session as draft   | ✅            |
| POST   | `/my-sessions/publish`    | Publish session         | ✅            |


## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/akash11-01/Arvyax.git
cd Arvyax
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create environment file
# Create .env file with the following variables:
# PORT=5000
# MONGODB_URI=your_mongodb_url_here
# JWT_SECRET=your_jwt_secret_key_here

# Start development server
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd Frontend

# Install dependencies
npm install

# Optional: Create .env file for custom API URL
# VITE_API_BASE_URL=http://localhost:5000

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173`

Made with ❤️ using React, Node.js, and MongoDB
