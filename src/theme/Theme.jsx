import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#700b97',
            dark: '#3e065f',
            light: '#8e05c2',
        },
        secondary: {
            main: '#bf0b83',
            dark: '#970b79',
        },
    },
});

export default theme;