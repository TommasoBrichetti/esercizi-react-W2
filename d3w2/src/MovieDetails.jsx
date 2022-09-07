import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap'

const MovieDetails = (props) => {

    const [movie, setMovie] = useState(null)

    const params = useParams()

    const getPost = async () => {
        try {
            let response = await fetch('http://www.omdbapi.com/?apikey=c28e67a7&i=' + params.movieId)
            console.log(response)

            if (response.ok) {
                let getMovie = await response.json();

                setMovie(
                    getMovie,
                )
            } else {
                console.log('Something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getPost()
        }, 1000)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [params.movieId])

  return (
    <Container className="movieDetails">
    <Row className="justify-content-center my-3">
      <Col className="text-center" xs={12} md={6}>
        {movie ? (
          <div>
            <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
            <h2>{movie.Title}</h2>
            <p>{movie.Writer} - {movie.Director}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Runtime} - {movie.Actors} - {movie.Year}</p>
            <p>{movie.imdbRating} - {movie.Metascore} - {movie.imdbVotes}</p>
          </div>
        ) : typeof pasta === 'undefined' ? (
            
            <Spinner animation="border" variant="success" />
        ) : (
            <Alert variant="danger">film non trovato</Alert>
        )}
      </Col>
    </Row>
  </Container>
  )
}


export default MovieDetails