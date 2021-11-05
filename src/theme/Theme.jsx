import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#9147ff',
            dark: '#3e065f',
            light: '#bf94ff',
        },
        secondary: {
            main: '#bf0b83',
            dark: '#970b79',
        },
    },
});

export default theme;