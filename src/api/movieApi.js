import axios from "axios";

const API_URL = "https://streamify-0t6p.onrender.com/movies";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const addMovie = async (newMovie) => {
  try {
    const response = await axios.post(API_URL, newMovie);
    return response.data;
  } catch (error) {
    console.error("Error adding movie:", error);
    throw error;
  }
};
