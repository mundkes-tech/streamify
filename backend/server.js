import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, '../db.json');

app.use(cors());
app.use(express.json());

// Helper to read movies from db.json
function readMovies() {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data).movies || [];
  } catch (err) {
    return [];
  }
}

// Helper to write movies to db.json
function writeMovies(movies) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ movies }, null, 2));
}

// GET /movies
app.get('/movies', (req, res) => {
  const movies = readMovies();
  res.json(movies);
});

// POST /movies
app.post('/movies', (req, res) => {
  const movies = readMovies();
  const newMovie = req.body;
  newMovie.id = Date.now().toString();
  movies.push(newMovie);
  writeMovies(movies);
  res.status(201).json(newMovie);
});

// DELETE /movies/:id
app.delete('/movies/:id', (req, res) => {
  let movies = readMovies();
  const { id } = req.params;
  const initialLength = movies.length;
  movies = movies.filter(movie => movie.id !== id);
  if (movies.length === initialLength) {
    return res.status(404).json({ error: 'Movie not found' });
  }
  writeMovies(movies);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
