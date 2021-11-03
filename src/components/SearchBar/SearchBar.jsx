import * as React from 'react'
import "./SearchBar.css"
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const SearchBar = () => {
    const [state, setstate] = React.useState('')
    const handleSearch = (evt) => {
        setstate(evt.target.value)
    }
    const search = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${'392eca317dc0880c7fc434bb6bb210a6'}&language=es&query=${state}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }
    return (
        <Search>
            <IconButton onClick={search}>
                <SearchRoundedIcon />
            </IconButton>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
            />
        </Search>
    )
}

export default SearchBar
