import { createStyles, makeStyles } from '@material-ui/core/styles';
import {DefaultTheme} from "../../../../constants/defaultTheme";

const useStyles = makeStyles<DefaultTheme>((theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(4)
        },
        cardHeader: {
            padding: theme.spacing(2, 4),
        }
    }),
);

export default useStyles;
