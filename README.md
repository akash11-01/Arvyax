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
- **Environment**: dotenv
- **Development**: nodemon

### Frontend

- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **State Management**: Redux Toolkit & React Redux
- **Routing**: React Router DOM 7.7.1
- **Styling**: Tailwind CSS 3.4.17
- **State Persistence**: Redux Persist
- **Code Quality**: ESLint

## 📁 Project Structure

```
Arvyax/
├── Backend/
│   ├── config/
│   │   └── db.js                  # Database connection
│   ├── controllers/
│   │   ├── authController.js      # Authentication logic
│   │   └── sessionController.js   # Session management
│   ├── middleware/
│   │   └── authMiddleware.js      # JWT authentication
│   ├── models/
│   │   ├── user.model.js          # User schema
│   │   └── session.model.js       # Session schema
│   ├── routes/
│   │   ├── authRoutes.js          # Auth endpoints
│   │   └── sessionRoutes.js       # Session endpoints
│   ├── server.js                  # Main server file
│   └── package.json
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   │   └── store.js           # Redux store
│   │   ├── components/
│   │   │   └── Navbar.jsx         # Navigation
│   │   ├── features/
│   │   │   └── authSlice.js       # Auth state
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx      # Public sessions
│   │   │   ├── Editor.jsx         # Session editor
│   │   │   ├── Login.jsx          # User login
│   │   │   ├── MySessions.jsx     # User sessions
│   │   │   └── Register.jsx       # Registration
│   │   ├── services/
│   │   │   ├── api.js             # API config
│   │   │   └── fetchWithToken.js  # Auth requests
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
└── README.md
```

## 🚀 Features

### Authentication

- User registration and login
- JWT-based authentication
- Secure password hashing
- Persistent login sessions
- Protected routes

### Session Management

- Create new sessions
- Save drafts for later editing
- Edit existing sessions
- Publish sessions publicly
- View all public sessions
- Manage personal sessions

### User Interface

- Modern, responsive design
- Clean navigation
- Real-time editing interface
- Mobile-friendly layout
- Authentication-based routing

## 🎯 API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint    | Description             | Auth Required |
| ------ | ----------- | ----------------------- | ------------- |
| POST   | `/register` | Create new user account | ❌            |
| POST   | `/login`    | User login              | ❌            |

### Sessions (`/api`)

| Method | Endpoint                  | Description             | Auth Required |
| ------ | ------------------------- | ----------------------- | ------------- |
| GET    | `/sessions`               | Get all public sessions | ❌            |
| GET    | `/my-sessions`            | Get user's sessions     | ✅            |
| GET    | `/my-sessions/:id`        | Get specific session    | ✅            |
| POST   | `/my-sessions/save-draft` | Save session as draft   | ✅            |
| POST   | `/my-sessions/publish`    | Publish session         | ✅            |

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

## ⚡ Quick Start

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
# MONGODB_URI=mongodb://localhost:27017/arvyax
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

## 🔧 Environment Variables

### Backend (.env)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/arvyax
JWT_SECRET=your_jwt_secret_key_here
```

### Frontend (.env) - Optional

```env
VITE_API_BASE_URL=http://localhost:5000
```

## 📊 Database Models

### User Model

```javascript
{
  email: String (required, unique),
  password_hash: String (required),
  created_at: Date (default: now)
}
```

### Session Model

```javascript
{
  user_id: ObjectId (ref: User, required),
  title: String (required),
  tags: [String] (default: []),
  json_file_url: String (required),
  status: String (enum: ["draft", "published"], default: "draft"),
  created_at: Date (default: now),
  updated_at: Date (default: now)
}
```

## 🔧 Available Scripts

### Backend

```bash
npm run dev    # Start development server with nodemon
npm start      # Start production server
```

### Frontend

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Application Pages

### 🏠 Dashboard

- Browse all published sessions
- Clean grid layout
- Public access

### 🔐 Authentication Pages

- **Login**: Secure user authentication
- **Register**: New user registration
- Automatic redirection based on auth state

### ✏️ Editor

- Create and edit sessions
- Save drafts functionality
- Publish sessions
- Real-time editing interface

### 📂 My Sessions

- View personal sessions (drafts & published)
- Quick edit access
- Status indicators

## 🔒 Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **JWT Authentication**: Stateless token-based auth
- **Protected Routes**: Frontend route protection
- **CORS Configuration**: Secure cross-origin requests
- **Input Validation**: Server-side validation and sanitization

## 🚀 Deployment

### Backend Deployment

1. Set up MongoDB Atlas or ensure MongoDB is running
2. Configure environment variables for production
3. Deploy to your preferred platform (Heroku, Railway, DigitalOcean, etc.)

### Frontend Deployment

1. Build the production version: `npm run build`
2. Deploy the `dist` folder to your hosting service (Vercel, Netlify, etc.)
3. Configure environment variables for production API URL

## 🧪 Development

### Running in Development Mode

1. Start the backend server: `cd Backend && npm run dev`
2. Start the frontend server: `cd Frontend && npm run dev`
3. Backend runs on port 5000, frontend on port 5173

### Code Quality

- ESLint configured for React best practices
- Consistent code formatting
- Modern JavaScript/ES6+ features

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Author

**Akash** - [akash11-01](https://github.com/akash11-01)

---

Made with ❤️ using React, Node.js, and MongoDB
