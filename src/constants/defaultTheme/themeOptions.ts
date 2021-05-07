import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';

export const themeOptions: ThemeOptions & any = {
    palette: {
        type: 'light',
    },
    typography: {
        fontFamily: 'Lato',
    },
    spacing: 8,
    shape: {
        borderRadius: 10,
    },
    props: {
        MuiAppBar: {
            color: 'default',
        },
    },
};