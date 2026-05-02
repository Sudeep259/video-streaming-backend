# 🎥 Video Streaming Backend API

## 🚀 Features

* JWT Authentication (Register/Login)
* Protected Routes using Middleware
* Video Upload using Multer
* Video Streaming using Range Requests (efficient streaming)

## 🛠 Tech Stack

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* Multer

## ⚙️ How to Run

```bash
npm install
npm run dev
```

Create a `.env` file:

```env
JWT_SECRET=your_secret_key
```

---

## 📡 API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### User

* GET `/api/user/profile` (Protected)

### Video

* POST `/api/video/upload`
* GET `/api/video/stream/:filename`

---

## 📌 Key Highlight

Implemented **range-based video streaming**, allowing:

* Partial content delivery
* Efficient video playback
* Seek (forward/backward)

---

## 📷 Future Improvements

* Video listing with pagination
* Cloud storage (AWS S3)
* Redis caching
* Frontend player integration
