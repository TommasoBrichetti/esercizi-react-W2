import { useEffect, useState } from "react";
import { Col, Container } from 'react-bootstrap'
import MovieCard from "./MovieCard";

const MovieList = (props) => {

    // state = {
    //     movies: []
    // }

    const [movies, setMovies] = useState([])

    const getPost = async () => {
        try {
            let response = await fetch(props.url)
            console.log(response)

            if (response.ok) {
                let getMovies = await response.json();
                console.log(getMovies.Search)

                setMovies(
                    getMovies.Search,
                )
            } else {
                console.log('Something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getPost()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    

    // componentDidMount = () => {
    //     this.getPost();
    // }

    const slideright = () => { document.getElementById(props.selector).scrollLeft += 190 }
    const slideleft = () => { document.getElementById(props.selector).scrollLeft -= 190 }

   
        return (
            <div>
                <h2 className="title ml-4">{props.title}</h2>
                <Container fluid className='moviesList' id={props.selector}>
                    {movies.map((m) => (
                        <Col key={m.imdbID}>
                            <MovieCard movie={m} />
                        </Col>
                    ))}
                </Container>
                <div className="button-area">
                    <button onClick={slideleft}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 26L10 16L20 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </button>
                    <button onClick={slideright}><svg className='right' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 26L10 16L20 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </button>
                </div>
            </div>
        )
    
}

export default MovieList;