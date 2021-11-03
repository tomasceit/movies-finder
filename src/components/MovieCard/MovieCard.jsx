import { CardActionArea } from '@mui/material'
import * as React from 'react'
import "./MovieCard.css"

const MovieCard = ({ title, img, genres, rating }) => {
    return (
        <div className="movie-card">
            <img className="card-image" src={img} alt={title} />
            <CardActionArea>
                <div className="card-content">
                    <h4 className="card-title">{title}</h4>
                    <h4>{rating}</h4>
                </div>
            </CardActionArea>
        </div>
    )
}

export default MovieCard
