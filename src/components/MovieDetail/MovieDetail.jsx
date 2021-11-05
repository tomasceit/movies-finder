import * as React from 'react'

const MovieDetail = ({ id }) => {
    const api_key = '392eca317dc0880c7fc434bb6bb210a6';
    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=es`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    })
    return (
        <div style={{margin: '8rem'}}>{id}</div>
    )
}

export default MovieDetail
