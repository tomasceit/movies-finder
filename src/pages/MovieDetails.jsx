import * as React from 'react'
import { useParams } from 'react-router'
import MovieDetail from '../components/MovieDetail/MovieDetail'

const MovieDetails = () => {
    const { id } = useParams();
    return (
        <MovieDetail id={id} />
    )
}

export default MovieDetails
