import * as React from 'react'
import { Typography, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import LoadingIcon from '../components/LoadingIcon/LoadingIcon'
import MovieCard from '../components/MovieCard/MovieCard'

const Home = () => {
    const api_key = process.env.REACT_APP_API_KEY;
    const [loading, setLoading] = React.useState(true)
    const [trendingList, setTrendingList] = React.useState({})
    const [popularList, setPopularList] = React.useState({})
    const [topRatedList, setTopRatedList] = React.useState({})
    const [upcomingList, setUpcomingList] = React.useState({})
    React.useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=es&page=1`)
            .then((response) => response.json())
            .then(data => setUpcomingList(data))
            .catch((error) => console.error(error))

        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&language=es`)
            .then((response) => response.json())
            .then(data => setTrendingList(data))
            .catch((error) => console.error(error))

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=es&sort_by=vote_average.desc&include_adult=false&page=1&vote_count.gte=7500`)
            .then((response) => response.json())
            .then(data => setTopRatedList(data))
            .catch((error) => console.error(error))

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es&page=1`)
            .then((response) => response.json())
            .then(data => setPopularList(data))
            .catch((error) => console.error(error))
            .finally(() => setTimeout(() => {
                setLoading(false)
            }, 500))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <LoadingIcon />
    } else {
        return (
            <div className='my-container'>
                <div className='movie-images-list'>
                    <div className='see-more'>
                        <Typography variant="h5" component="h3">TRENDING MOVIES</Typography>
                        <Typography variant="h7" component={Link} sx={{ marginRight: 1 }} to='/trending'>Ver mas</Typography>
                    </div>
                    <Divider sx={{ borderColor: `primary.light`, margin: '0.6rem 0' }} />
                    <section className="cards-container-home">
                        {(trendingList.results.slice(0, 4)).map((movie, index) => <MovieCard key={index} id={movie.id} title={movie.original_title} img={movie.poster_path === null ? 'https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} rating={movie.vote_average} overview={movie.overview !== '' ? movie.overview : 'No hay descripcion disponible para esta película'} />)}
                    </section>
                </div>

                <div className='movie-images-list'>
                    <div className='see-more'>
                        <Typography variant="h5" component="h3">POPULAR MOVIES</Typography>
                        <Typography variant="h7" component={Link} sx={{ marginRight: 1 }} to='/popular/page/1'>Ver mas</Typography>
                    </div>
                    <Divider sx={{ borderColor: `primary.light`, margin: '0.6rem 0' }} />
                    <section className="cards-container-home">
                        {(popularList.results.slice(0, 4)).map((movie, index) => <MovieCard key={index} id={movie.id} title={movie.original_title} img={movie.poster_path === null ? 'https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} rating={movie.vote_average} overview={movie.overview !== '' ? movie.overview : 'No hay descripcion disponible para esta película'} />)}
                    </section>
                </div>

                <div className='movie-images-list'>
                    <div className='see-more'>
                        <Typography variant="h5" component="h3">TOP RATED MOVIES</Typography>
                        <Typography variant="h7" component={Link} sx={{ marginRight: 1 }} to='/top_rated/page/1'>Ver mas</Typography>
                    </div>
                    <Divider sx={{ borderColor: `primary.light`, margin: '0.6rem 0' }} />
                    <section className="cards-container-home">
                        {(topRatedList.results.slice(0, 4)).map((movie, index) => <MovieCard key={index} id={movie.id} title={movie.original_title} img={movie.poster_path === null ? 'https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} rating={movie.vote_average} overview={movie.overview !== '' ? movie.overview : 'No hay descripcion disponible para esta película'} />)}
                    </section>
                </div>

                <div className='movie-images-list'>
                    <div className='see-more'>
                        <Typography variant="h5" component="h3">UPCOMING MOVIES</Typography>
                        <Typography variant="h7" component={Link} sx={{ marginRight: 1 }} to='/upcoming/page/1'>Ver mas</Typography>
                    </div>
                    <Divider sx={{ borderColor: `primary.light`, margin: '0.6rem 0' }} />
                    <section className="cards-container-home">
                        {(upcomingList.results.slice(0, 4)).map((movie, index) => <MovieCard key={index} id={movie.id} title={movie.original_title} img={movie.poster_path === null ? 'https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} rating={movie.vote_average} overview={movie.overview !== '' ? movie.overview : 'No hay descripcion disponible para esta película'} />)}
                    </section>
                </div>
            </div>
        )
    }
}

export default Home
