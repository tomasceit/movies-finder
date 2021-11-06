import * as React from 'react'
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <AppBar
            position='absolute'
            sx={{ backgroundColor: '#18181b' }}
        >
            <Toolbar className="navbar">
                <Link to='/home'>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <GroupWorkIcon color="primary" fontSize="large" sx={{ marginRight: '0.5rem' }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            MoviesFinder
                        </Typography>
                    </IconButton>

                </Link>
                <SearchBar />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
