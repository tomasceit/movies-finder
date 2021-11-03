import * as React from 'react'
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Divider } from '@mui/material';

const MyList = styled(List)({
    width: '250px',
    '& .MuiListItemButton-root': {
        paddingLeft: 24,
        paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});

const GenresTable = () => {
    return (
        <MyList component="nav" disablePadding>
            <ListItemButton>
                <ListItemText
                    sx={{ my: 0 }}
                    primary="Generos"
                    primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: 'medium',
                        letterSpacing: 0,
                    }}
                />
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ height: 56 }}>
                <ListItemText
                    primary="Project Overview"
                    primaryTypographyProps={{
                        color: 'primary',
                        fontSize: 18,
                        fontWeight: 'medium',
                        variant: 'body2',
                    }}
                />
            </ListItemButton>
            <ListItemButton sx={{ height: 56 }}>
                <ListItemText
                    primary="Project Overview"
                    primaryTypographyProps={{
                        color: 'primary',
                        fontSize: 18,
                        fontWeight: 'medium',
                        variant: 'body2',
                    }}
                />
            </ListItemButton>
            <ListItemButton sx={{ height: 56 }}>
                <ListItemText
                    primary="Project Overview"
                    primaryTypographyProps={{
                        color: 'primary',
                        fontSize: 18,
                        fontWeight: 'medium',
                        variant: 'body2',
                    }}
                />
            </ListItemButton>
            <ListItemButton sx={{ height: 56 }}>
                <ListItemText
                    primary="Project Overview"
                    primaryTypographyProps={{
                        color: 'primary',
                        fontSize: 18,
                        fontWeight: 'medium',
                        variant: 'body2',
                    }}
                />
            </ListItemButton>
        </MyList>
    )
}

export default GenresTable
