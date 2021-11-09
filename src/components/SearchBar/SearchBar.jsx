import * as React from 'react'
import "./SearchBar.css"
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from "react-router-dom"

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
            width: '10ch',
            '&:focus': {
                width: '20ch',
            },
        },
        [theme.breakpoints.down('sm')]: {
            width: '4ch',
            '&:focus': {
                width: '10ch',
            },
        },
    },
}));

const SearchBar = () => {
    const [state, setstate] = React.useState('')
    const navigate = useNavigate();
    const [empty, setEmpty] = React.useState(false)
    const handleSearch = (evt) => {
        setstate(evt.target.value)
    }
    const onSearch = () => {
        if (state !== '') {
            navigate(`/search/${state}`)
        } else {
        setEmpty(true)
        setTimeout(() => {
            setEmpty(false)
            }, 5000)
        }
    }

    return (
        <div>
        <Search sx={{ border: empty && '1px solid #d32f2f', marginTop: empty && '12px' }}>
            <IconButton onClick={onSearch} sx={{ color: 'white' }}>
                <SearchRoundedIcon />
            </IconButton>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
            />
        </Search>
        {empty && <p style={{ fontSize: '0.8rem', fontStyle: 'oblique', color: '#d32f2f', margin: '0.2rem'}}>El campo de busqueda esta vacío</p>}
        </div>
    )
}

export default SearchBar
