import * as React from 'react'
import "./CardsContainer.css"
import MovieCard from '../MovieCard/MovieCard'
import LoadingIcon from '../LoadingIcon/LoadingIcon'

const CardsContainer = ({ sort, pageNumber }) => {
    const api_key = process.env.REACT_APP_API_KEY;
    const [loading, setLoading] = React.useState(true)
    const [movies, setMovies] = React.useState([])

    React.useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${api_key}&language=es&page=${pageNumber}`)
            .then((response) => response.json())
            .then(data => setMovies(data))
            .catch((error) => console.error(error))
            .finally(() => setTimeout(() => {
                setLoading(false)
            }, 100))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort, pageNumber])

    if (loading) {
        return (
            <LoadingIcon />
        )
    } else {
        return (
            <section className="cards-container">
                {movies.results.map((movie, index) => <MovieCard key={index} id={movie.id} title={movie.original_title} img={movie.poster_path === null ? 'https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} rating={movie.vote_average} overview={movie.overview !== '' ? movie.overview : 'No hay descripcion disponible para esta película'} />)}
            </section>
        )
    }
}

export default CardsContainer
