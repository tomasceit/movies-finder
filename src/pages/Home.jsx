import * as React from 'react'
import CardsContainer from '../components/CardsContainer/CardsContainer';
import GenresTable from '../components/GenresTable/GenresTable';

const Home = () => {
    return (
        <div className='main-page'>
            <aside>
                <GenresTable />
            </aside>
            <CardsContainer />
        </div>
    )
}

export default Home
