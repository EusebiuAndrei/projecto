import { createStyles, makeStyles } from '@material-ui/core/styles';
import {DefaultTheme} from "../../../constants/defaultTheme";

interface TopBarStylesProps {}

const useStyles = makeStyles<DefaultTheme, TopBarStylesProps>((theme) =>
    createStyles({
        root: {
            display: 'flex',
            marginTop: theme.spacing(4),

            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',

            [theme.breakpoints.up('md')]: {
                flexDirection: 'row',
                alignItems: 'baseline',
                padding: theme.spacing(0, 10),
            },
        },
    }),
);

export default useStyles;
