# 🎥 Streamify — Movie Streaming Web App

A modern, responsive movie streaming platform built with React (Frontend) and Node.js / Express (Backend).
Streamify lets users browse, search, and add movies through a clean and intuitive interface.

<div align="center">

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

</div>

## 🚀 Live Demo

🔗 Try Streamify here:
👉 https://streamifymovies.netlify.app/

## ✨ Features

- ✔️ Browse a curated movie collection
- ✔️ Search movies by title or genre
- ✔️ Add new movies to the catalog
- ✔️ Delete movies from the list
- ✔️ Fully responsive & mobile-friendly
- ✔️ Lightweight & fast UI with React

## 🛠 Tech Stack

### 🎨 Frontend

- React
- React Router
- Axios
- Bootstrap

### ⚙️ Backend

- Node.js
- Express.js
- CORS
- JSON Server (mock REST API for development)

## ⚡ Installation & Setup

### ✔️ Prerequisites

- Node.js (v14+)
- npm or yarn

### 🔧 Clone Repository
```bash
git clone https://github.com/your-username/streamify.git
cd streamify
```

### 📦 Install Frontend Dependencies
```bash
npm install
```

### 🗄️ Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### ▶️ Start Backend Server
```bash
cd backend
npm start
```
Runs on → http://localhost:5000

### ▶️ Start Frontend
```bash
npm start
```
Runs on → http://localhost:3000

## 📖 How to Use

1. 1️⃣ Open the app in your browser
2. 2️⃣ Browse movies on the home page
3. 3️⃣ Search movies using the search bar
4. 4️⃣ Click Add Movie to submit new entries
5. 5️⃣ View movie details in the list

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /movies | Fetch all movies |
| POST | /movies | Add a new movie |
| DELETE | /movies/:id | Delete movie |

## 🧾 Sample Movie Object
```json
{
  "id": "1234567890",
  "title": "Movie Title",
  "genre": "Action",
  "year": 2023,
  "description": "A brief description of the movie"
}
```

## 🗂 Project Structure
```
streamify/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   └── ...
├── backend/
│   ├── server.js
│   └── package.json
├── db.json
└── package.json
```

## 🧪 Testing
```bash
npm test
```

## 🚢 Deployment

### 🌍 Frontend
```bash
npm run build
```
Deploy via Netlify / Vercel / Firebase

### 🧾 Backend

Suitable for:

- Railway
- Render
- Heroku
- Any Node hosting provider

## 🤝 Contributing

- Fork repository
- Create feature branch
- Commit changes
- Push branch
- Open Pull Request

## 📜 License

MIT License — see LICENSE file

## 🙏 Acknowledgments

- Public movie APIs
- Bootstrap UI community
- Open-source contributors

❤️ Built with passion using React & Node.js