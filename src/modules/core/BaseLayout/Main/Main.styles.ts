import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            backgroundImage: `linear-gradient(45deg, #F4F8FD, #F0F8FD)`,
            backgroundColor: '#F7F6F4',
            minHeight: '100vh',
        },
    }),
);

export default useStyles;