import React from "react";

const MovieSearch = ({ searchTerm, setSearchTerm, searchMovies }) => {
  return (
    <div className="search-container">
      <div className="grid-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchMovies(); // Call search function when Enter is pressed
            }
          }}
          className="form-control search-input"
        />
        <button onClick={searchMovies} className="btn btn-outline-success" type="submit">Search</button>
      </div>
    </div>
  );
};

export default MovieSearch;
