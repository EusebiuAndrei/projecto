import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: '0',
        left: '0',
        zIndex: 99999
    },
    navigationItem: {
        paddingBottom: '5px',
    },
    navigationItemSelected: {
        paddingBottom: 0,
        borderBottom: `5px solid ${theme.palette.primary.main}`,
    },
    navigationItemLabel: {
        border: 0
    }
}));

export default useStyles;