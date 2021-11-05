import * as React from 'react'
import "./CardsContainer.css"
import MovieCard from '../MovieCard/MovieCard'
import LoadingIcon from '../LoadingIcon/LoadingIcon'

const CardsContainer = () => {
    const api_key = '392eca317dc0880c7fc434bb6bb210a6'
    const [loading, setLoading] = React.useState(true)
    const [movies, setMovies] = React.useState([])

    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es&page=1`)
            .then((response) => response.json())
            .then(data => setMovies(data))
            .catch((error) => console.error(error))
            .finally(() => setTimeout(() => {
                setLoading(false)
            }, 500))
    }, [])

    if (loading) {
        return (
            <LoadingIcon />
        )
    } else {
        return (
            <section className="cards-container">
                {movies.results.map((movie, index) => <MovieCard key={index} id={movie.id} title={movie.original_title} img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} rating={movie.vote_average} overview={movie.overview} genre_ids={movie.genre_ids} />)}
            </section>
        )
    }
}

export default CardsContainer
