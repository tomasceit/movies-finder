import * as React from 'react'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import { useNavigate } from "react-router-dom"

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    color: 'white',
    border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
    minWidth: '130px'
}));


const FilterList = ({ sort='popular' }) => {
    const navigate = useNavigate();
    const [alignment, setAlignment] = React.useState(sort)
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment)
        newAlignment !== null && navigate(`/${newAlignment}/page/1`)
      };
    return (
        <ToggleButtonGroup
            elevation={2}
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            size='large'
            sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
        >
            <StyledToggleButton value="popular">Popular</StyledToggleButton>
            <StyledToggleButton value="top_rated">Top rated</StyledToggleButton>
            <StyledToggleButton value="upcoming">Upcoming</StyledToggleButton>
            <StyledToggleButton value="now_playing">Now playing</StyledToggleButton>
        </ToggleButtonGroup>
    )
}

export default FilterList
