import React, { useState } from "react";
import { addMovie } from "../api/movieApi";
import { Form, Button, Container, Row, Col, Card, Image } from "react-bootstrap";
import "./AddMovie.css"; // Import custom styles

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const handleTitleChange = (e) => {
    const input = e.target.value;
    if (input.length <= 50) {
      setTitle(input);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !genre || !rating || !image || !releaseYear) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    const newMovie = { title, genre, rating, image, releaseYear };
    try {
      await addMovie(newMovie);
      alert("🎉 Movie added successfully!");
      setTitle("");
      setGenre("");
      setRating("");
      setImage("");
      setReleaseYear("");
    } catch (error) {
      alert("❌ Failed to add movie.");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow-lg add-movie-card">
            <Card.Title className="text-center mb-3">🎬 Add a New Movie</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter movie title"
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter genre"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rating (1-10)</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  max="10"
                  placeholder="Enter rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Movie Poster URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Release Year</Form.Label>
                <Form.Control
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  placeholder="Enter release year"
                  value={releaseYear}
                  onChange={(e) => setReleaseYear(e.target.value)}
                  required
                />
              </Form.Group>

              {image && (
                <div className="text-center mb-3">
                  <Image src={image} alt="Movie Poster" className="movie-preview" />
                </div>
              )}

              <div className="text-center">
                <Button variant="primary" type="submit" className="w-100 add-movie-btn">
                  ➕ Add Movie
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddMovie;
