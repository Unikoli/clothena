🛍️ Clothena
Clothena is a modern e-commerce platform for clothing, featuring full-stack development with a focus on scalable architecture and modular code. It includes secure user authentication, product browsing, shopping cart functionality, and admin management tools.

📁 Project Structure

clothena/
├── backend/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── middlewares/
│   ├── routes/
│   └── .env
└── frontend/
    └── [React app files here]
⚙️ Technologies Used
Backend
Node.js, Express

MongoDB with Mongoose

JWT for authentication

Multer for file uploads

dotenv for environment configuration

Frontend

React.js

Axios

🚀 Getting Started
Prerequisites
Node.js & npm

MongoDB (local or cloud, e.g. MongoDB Atlas)

Environment Setup
Create a .env file in the backend/ directory with the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Backend Installation

cd backend
npm install
npm run dev
Frontend Installation

cd frontend
npm install
npm start
📦 Features
User registration & login (JWT-based)

Product CRUD (Create, Read, Update, Delete)

Category and Brand management

Shopping Cart

File upload for product images

Role-based middleware

Secure API routes

🧪 API Overview
Authentication
POST /api/auth/register

POST /api/auth/login

Products
GET /api/products

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id

Cart
GET /api/cart

POST /api/cart

DELETE /api/cart/:id

(More routes included in controllers)

👨‍💻 Developers
Built with ❤️ by your team.

