import * as React from 'react'
import "./MovieCard.css"
import { CardActionArea, CircularProgress, Box, Typography } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const Card = styled('div')(({ theme }) => ({
    position: 'relative',
    margin: '1rem',
    maxWidth: '300px',
    borderRadius: '5px',
    overflow: 'hidden',
    backgroundColor: alpha(theme.palette.common.white, 0.05),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.1),
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
const api_key = '392eca317dc0880c7fc434bb6bb210a6'

const MovieCard = ({ id, title, img, rating, overview, genre_ids }) => {
    // eslint-disable-next-line no-unused-vars
    const [genreList, setGenreList] = React.useState([])
    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=es`)
            .then((response) => response.json())
            .then(data => setGenreList(data))
    }, [])



    return (
        <Card>
            <div className="card-image">
                <img src={img} alt={title} />
                <div className="movie-description">
                    <h3>Descripción:</h3>
                    <p>{overview}</p>
                </div>
            </div>
            <Link to={`/movie/${id}`}>
                <CardActionArea>
                    <div className="card-content">
                        <h3 className="card-title">{title}</h3>
                        <div style={{ display: 'flex' }}>
                            <CircularProgress
                                variant="determinate"
                                value={rating * 10}
                                color={rating >= 7 ? 'success'
                                    : rating >= 5 ? 'warning' : 'error'}
                            />
                            <Box
                                sx={{
                                    top: 0,
                                    left: '77%',
                                    bottom: 0,
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="caption" component="div" color="">
                                    {`${rating * 10}%`}
                                </Typography>
                            </Box>
                        </div>
                    </div>
                </CardActionArea>
            </Link>
        </Card>
    )
}

export default MovieCard
