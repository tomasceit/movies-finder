import * as React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Pagination, PaginationItem } from '@mui/material'
import CardsContainer from '../components/CardsContainer/CardsContainer'
import FilterList from '../components/FilterList/FilterList'

const MoviesList = () => {
    const { sort, number } = useParams();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [sort, number]);
    return (
        <>
            <div className='my-container'>
                <FilterList sort={sort} />
                <CardsContainer sort={sort} pageNumber={number} />
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
                            to={`/${sort}/page/${item.page}`}
                            {...item}
                        />
                    )}
                />
            </div>

        </>
    )
}

export default MoviesList
