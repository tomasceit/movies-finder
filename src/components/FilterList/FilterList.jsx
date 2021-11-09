import * as React from 'react'
import { ToggleButtonGroup, ToggleButton, Menu, MenuItem } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import { useNavigate } from "react-router-dom"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    color: 'white',
    border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
    minWidth: '130px'
}));

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: 'primary',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


const FilterList = ({ sort = 'popular' }) => {
    const [genresObject, setGenresObjgenresObject] = React.useState({});
    const [proceda, setProceda] = React.useState(false)
    const api_key = process.env.REACT_APP_API_KEY;
    React.useEffect(() => {
        setProceda(false)
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=es`)
            .then(response => response.json())
            .then(data => setGenresObjgenresObject(data))
            .catch(error => console.error(error))
            .finally(() => setProceda(true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const navigate = useNavigate();
    const [alignment, setAlignment] = React.useState(sort)
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment)
        newAlignment !== "genres"
            && newAlignment !== null && navigate(`/${newAlignment}/page/1`)
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (name, id) => {
        setAnchorEl(null);
        navigate(`/genres/${name}/${id}/page=1`)
    };
    return (
        <>
            <ToggleButtonGroup
                elevation={2}
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                size='large'
                sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap'}}
            >
                <StyledToggleButton value="popular">Popular</StyledToggleButton>
                <StyledToggleButton value="top_rated">Top rated</StyledToggleButton>
                <StyledToggleButton value="upcoming">Upcoming</StyledToggleButton>
                <StyledToggleButton value="now_playing">Now playing</StyledToggleButton>
                <StyledToggleButton value="genres"
                    aria-controls="demo-customized-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    onClick={handleClick}
                >Genres <ArrowDropDownIcon /></StyledToggleButton>
            </ToggleButtonGroup>

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >   
                {proceda && (genresObject.genres).length !== 0 && (genresObject.genres).map((genre) => <MenuItem key={genre.id} onClick={() => handleClose(genre.name, genre.id)} disableRipple>{genre.name}</MenuItem>)}
            </StyledMenu>
        </>
    )
}

export default FilterList
