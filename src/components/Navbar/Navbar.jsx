import * as React from 'react'
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar'
import { AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar className="navbar">
                <Link to='/home'>
                    <h2>MOVIESFINDER</h2>
                </Link>
                <SearchBar />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
