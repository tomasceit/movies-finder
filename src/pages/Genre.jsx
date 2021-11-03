import * as React from 'react'
import { useParams } from 'react-router'
import CardsContainer from '../components/CardsContainer/CardsContainer'

const Genre = () => {
    const { genre } = useParams();
    return (
        <>
            <CardsContainer /> 
        </>
    )
}

export default Genre
