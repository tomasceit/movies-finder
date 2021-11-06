import * as React from 'react'
import CardsContainer from '../components/CardsContainer/CardsContainer';
import { Pagination, PaginationItem } from '@mui/material'
import { Link } from 'react-router-dom'
import FilterList from '../components/FilterList/FilterList';

const Home = () => {
    return (
        <>
            <div className='my-container'>
                <FilterList />
                <CardsContainer sort='popular' pageNumber='1' />
                <Pagination
                    page={Number(1)}
                    sx={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}
                    count={10}
                    size='large'
                    color='primary'
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            sx={{ color: 'white' }}
                            to={`/popular/page/${item.page}`}
                            {...item}
                        />
                    )}
                />
            </div>

        </>
    )
}

export default Home
