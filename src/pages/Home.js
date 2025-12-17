import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:5000/movies");
      setMovies(response.data);
      setFilteredMovies(response.data);
      console.log("📢 Fetched Movies:", response.data); // ✅ Debugging log
    } catch (err) {
      setError("Failed to fetch movies. Please try again.");
      console.error("❌ Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const searchMovies = () => {
    const lowercasedSearchTerm = searchTerm.trim().toLowerCase(); // Trim spaces

    if (lowercasedSearchTerm === "") {
      setFilteredMovies(movies); // ✅ Show all movies when search is empty
      console.log("🔄 Reset to all movies");
      return;
    }

    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(lowercasedSearchTerm) ||
      movie.genre.toLowerCase().includes(lowercasedSearchTerm) ||
      movie.releaseYear.toString().includes(lowercasedSearchTerm)
    );

    console.log("🔍 Search Term:", searchTerm);  // ✅ Debugging log
    console.log("✅ Filtered Movies:", filtered);  // ✅ Debugging log

    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h2>Search Movie here...</h2>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
        <MovieSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchMovies={searchMovies}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;
