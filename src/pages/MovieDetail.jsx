import * as React from 'react'
import { useParams } from 'react-router'

const MovieDetail = () => {
    const { id } = useParams();
    return (
        <div>
            {console.log(id)}
        </div>
    )
}

export default MovieDetail
