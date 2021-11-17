import * as React from 'react'
import { useParams } from 'react-router'
import { Typography, Divider } from '@mui/material'
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
        <div className="my-container">
            <Typography variant="h3" sx={{ fontSize: '2rem' }}>Resultados de la búsqueda: {searched}</Typography>
            <Divider sx={{ borderColor: `primary.light`, margin: '1rem 0' }} />
            <section className="cards-container">
                {moviesList.length !== 0 
                    ? moviesList.map((movie, index) => <MovieCard key={index} id={movie.id} title={movie.original_title} img={movie.poster_path === null ? 'https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} rating={movie.vote_average} overview={movie.overview !== '' ? movie.overview : 'No hay descripcion disponible para esta película'} />)
                    : <Typography variant="h4" sx={{ fontSize: '2rem' }}>No se encontraron resultados que coincidan con la busqueda</Typography>}
            </section>
        </div>
    )
}

export default Search
