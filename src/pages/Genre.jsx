import * as React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Pagination, PaginationItem, Typography, Divider, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import FilterList from '../components/FilterList/FilterList'
import MovieCard from '../components/MovieCard/MovieCard'

const Genre = () => {
    const { genre, id, number } = useParams();
    const [proceda, setProceda] = React.useState(false)
    const api_key = process.env.REACT_APP_API_KEY;
    const [movies, setMovies] = React.useState({})
    const [sort, setSort] = React.useState('popularity')
    const handleChange = (evt) => {
        setSort(evt.target.value);
    }
    React.useEffect(() => {
        setProceda(false)
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=es&sort_by=${sort}.desc&with_genres=${id}&page=${number}&vote_count.gte=250`)
            .then(res => res.json())
            .then(data => setMovies(data))
            .finally(() => setProceda(true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [genre, number, sort])

    return (
        <>
            <div className='my-container'>
                <FilterList sort='genres' />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 'auto', maxWidth: '95%' }}>
                    <Typography variant="h5" component="h2">PELÍCULAS DE {genre.toUpperCase()}</Typography>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="select-sort-by" sx={{ color: '#9147ff' }}>Sort by</InputLabel>
                        <Select
                            sx={{ color: 'white', borderBottom: `1px solid #9147ff` }}
                            labelId="select-sort-by"
                            id="simple-select-sort"
                            value={sort}
                            onChange={handleChange}
                            label="Sort By"
                        >
                            <MenuItem value='popularity'>Popularity</MenuItem>
                            <MenuItem value='vote_average'>Rating</MenuItem>
                            <MenuItem value='release_date'>Release Date</MenuItem>
                            <MenuItem value='original_title'>Alphabetic</MenuItem>
                        </Select>
                    </FormControl>
                </div>
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
