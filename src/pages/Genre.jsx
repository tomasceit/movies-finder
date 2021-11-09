import * as React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Pagination, PaginationItem, Typography, Divider } from '@mui/material'
import FilterList from '../components/FilterList/FilterList'
import MovieCard from '../components/MovieCard/MovieCard'

const Genre = () => {
    const { genre, id, number } = useParams();
    const [proceda, setProceda] = React.useState(false)
    const api_key = process.env.REACT_APP_API_KEY;
    const [movies, setMovies] = React.useState({})
    React.useEffect(() => {
        setProceda(false)
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=es&sort_by=popularity.desc&with_genres=${id}&page=${number}`)
            .then(res => res.json())
            .then(data => setMovies(data))
            .finally(() => setProceda(true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [genre, number])

    return (
        <>
            <div className='my-container'>
                <FilterList sort='genres' />
                <Typography variant="h5" component="h2">Películas de {genre.toLowerCase()}</Typography> 
                <Divider sx={{ borderColor: `primary.light`, margin: '0.6rem 0' }} />
                {proceda && <section className="cards-container">
                    {movies.results.map((movie, index) => <MovieCard key={index} id={movie.id} title={movie.original_title} img={movie.poster_path === null ? 'https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} rating={movie.vote_average} overview={movie.overview !== '' ? movie.overview : 'No hay descripcion disponible para esta película'} />)}
                </section>}
                
                <Pagination
                    page={Number(number)}
                    sx={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}
                    count={10}
                    size='large'
                    color='primary'
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            sx={{ color: 'white' }}
                            to={`/genres/${genre}/${id}/page=${item.page}`}
                            {...item}
                        />
                    )}
                />
            </div>

        </>
    )
}

export default Genre
