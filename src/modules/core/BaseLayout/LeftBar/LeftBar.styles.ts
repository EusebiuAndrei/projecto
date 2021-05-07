import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 80;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            overflowY: 'inherit'
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(10),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(10),
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 0,
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        logo: {
            padding: theme.spacing(3, 3.5),
        },
        navigation: {
            display: 'flex',
            flexDirection: 'column',
        },
        navigationItem: {
            paddingLeft: '5px',
        },
        navigationItemSelected: {
            paddingLeft: 0,
            borderLeft: `5px solid ${theme.palette.primary.main}`,
        },
        navigationItemLabel: {
            border: 0
        }
    }),
);

export default useStyles;