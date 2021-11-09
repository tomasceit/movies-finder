import * as React from 'react'
import './MovieDetail.css'
import LoadingIcon from '../LoadingIcon/LoadingIcon'
import { Divider, Typography, Rating, Stack, Chip } from '@mui/material';

const MovieDetail = ({ id }) => {
    const api_key = process.env.REACT_APP_API_KEY;
    const [movie, setMovie] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=es`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(err => console.error(err))
            .finally(() => setTimeout(() => {
                setLoading(false)
            }, 250))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    if (loading) {
        return <LoadingIcon />
    } else {
        return (
            <>
                <div className="details-container">
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='movie poster' className='movie-poster' />
                        <div className="rating-wrapper">
                            <Rating name="movie-rating" value={movie.vote_average / 2} precision={0.5} readOnly />
                            <p>{movie.vote_average / 2}</p>
                            <p>|</p>
                            <p>{movie.vote_count} votes</p>
                        </div>
                        <Stack direction="row" spacing={2} sx={{ marginTop: '1rem', justifyContent: 'center' }}>
                            {movie.genres.map((genre, index) => {
                                return <Chip key={index} label={genre.name} variant="outlined" sx={{ fontSize: '18px', color: 'primary.light', borderColor: `primary.light` }} />
                            })}
                        </Stack>
                    </div>
                    <div className="movie-title">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h3">{movie.original_title}</Typography>
                            <Typography variant="subtitle1" gutterBottom component="h4" sx={{ fontSize: '32px', margin: '0 2rem', fontWeight: '200' }}>({movie.title})</Typography>
                        </div>
                        <Divider sx={{ borderColor: `primary.light`, margin: '1.2rem 0' }} />
                        <Typography variant="subtitle1" sx={{ fontWeight: '100', fontStyle: 'oblique' }} >{movie.tagline}</Typography>
                        <Typography variant="body1" sx={{ fontSize: '22px', fontWeight: '300', margin: 4 }}>{movie.overview}</Typography>
                    </div>
                </div>

                <div className="details-container-mobile">
                    <div className="main-info-mobile">
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='movie poster' className='movie-poster-mobile' />
                        <div className="title-mobile">
                            <Typography variant="h3" sx={{ fontSize: '1.2rem' }}>{movie.original_title}</Typography>
                            <Divider sx={{ borderColor: `primary.light`, margin: '1.2rem 0' }} />
                            <Typography variant="subtitle1" sx={{ fontWeight: '100', fontStyle: 'oblique', fontSize: '0.9rem' }} >{movie.tagline}</Typography>
                            <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: '300', margin: '1rem 0' }}>{movie.overview}</Typography>
                        </div>
                    </div>
                    <div className="rating-wrapper">
                        <Rating name="movie-rating" value={movie.vote_average / 2} precision={0.5} readOnly />
                        <p>{movie.vote_average / 2}</p>
                        <p>|</p>
                        <p>{movie.vote_count} votes</p>
                    </div>
                    <Stack direction="row" spacing={2} sx={{ margin: '1rem 0 0 0', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                        {movie.genres.map((genre, index) => {
                            return <Chip key={index} label={genre.name} variant="outlined" sx={{ fontSize: '18px', color: 'primary.light', borderColor: `primary.light`, padding: '0.8rem', margin:'0.7rem' }} />
                        })}
                    </Stack>
                </div>
            </>
        )
    }
}

export default MovieDetail
