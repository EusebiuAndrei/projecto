import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 200;
const iconsWidth = 80;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${iconsWidth}px)`,
                marginLeft: iconsWidth,
            },
            boxShadow: 'none',
            backgroundColor: 'white',
        },
        toolbar: {
            paddingTop: theme.spacing(1.5),
            paddingBottom: theme.spacing(1.5),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
    }),
);

export default useStyles;