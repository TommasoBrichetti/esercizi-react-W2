import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const MovieCard = (props) => {

    return (
        <div className="movieCard">
            <Link to={'/details/' + props.movie.imdbID}>
                <Image src={props.movie.Poster} width={'160'} height={'220'} />
            </Link>
        </div>
    )

}

export default MovieCard;