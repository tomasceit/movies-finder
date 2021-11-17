import * as React from 'react'
import MovieCard from '../components/MovieCard/MovieCard';
import FilterList from '../components/FilterList/FilterList';
import { Typography, Divider } from '@mui/material'

const Trending = () => {
    const [proceda, setProceda] = React.useState(false)
    const api_key = process.env.REACT_APP_API_KEY;
    const [movies, setMovies] = React.useState({})
    React.useEffect(() => {
        setProceda(false)
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setMovies(data))
            .finally(() => setProceda(true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='my-container'>
            <FilterList sort='trending' />
            <Typography variant="h5" component="h2">TRENDING MOVIES</Typography>
            <Divider sx={{ borderColor: `primary.light`, margin: '0.6rem 0' }} />
            {proceda && <section className="cards-container">
                {movies.results.map((movie, index) => <MovieCard key={index} id={movie.id} title={movie.original_title} img={movie.poster_path === null ? 'https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} rating={movie.vote_average} overview={movie.overview !== '' ? movie.overview : 'No hay descripcion disponible para esta película'} />)}
            </section>}
        </div>
    )
}

export default Trending