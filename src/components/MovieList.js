import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const MovieList = ({ movies }) => {
  return (
    <Container className="mt-4 mb-5"> {/* Added 'mb-5' for bottom spacing */}
      <Row className="justify-content-center g-4">
        {movies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} className="d-flex justify-content-center">
            <Card className="shadow movie-card">
              <Card.Img
                variant="top"
                src={movie.image || "/images/default-movie.jpg"}
                alt={movie.title}
                className="movie-poster"
              />
              <Card.Body className="text-center">
                <Card.Title className="small-title">{movie.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted small-text">
                  {movie.genre}
                </Card.Subtitle>
                <Card.Text className="small-text">
                  <strong>Release Year:</strong> {movie.releaseYear}
                </Card.Text>
                <Card.Footer className="text-center small-text">
                  ⭐ {movie.rating}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
