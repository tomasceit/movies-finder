import * as React from 'react'
import { useParams } from 'react-router'
import MovieCard from '../components/MovieCard/MovieCard'

const Search = () => {
    const api_key = process.env.REACT_APP_API_KEY;
    const { searched } = useParams()
    const [moviesList, setMoviesList] = React.useState([])
    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=es&query=${searched}`)
            .then(response => response.json())
            .then(data => setMoviesList(data.results))
            .catch(error => console.error(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searched])
    return (
        <section className="my-container cards-container">
            {moviesList.map((movie, index) => <MovieCard key={index} id={movie.id} title={movie.original_title} img={movie.poster_path === null ? 'https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} rating={movie.vote_average} overview={movie.overview !== '' ? movie.overview : 'No hay descripcion disponible para esta película'} />)}
        </section>
    )
}

export default Search
