import MovieList from "./MovieList";
import MySelector from "./MySelector";

const Home = () => {

    return (
        <div>
            <MySelector />
            <MovieList url="http://www.omdbapi.com/?apikey=bca2e436&s=harry%20potter" title='Harry Potter' selector={'one'} />
            <MovieList url="http://www.omdbapi.com/?apikey=bca2e436&s=matrix" title='Matrix' selector={'two'} />
            <MovieList url="http://www.omdbapi.com/?apikey=bca2e436&s=star%20wars" title='Star Wors' selector={'three'} />
        </div>
    )

}

export default Home;