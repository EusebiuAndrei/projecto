import { createStyles, makeStyles } from '@material-ui/core/styles';
import {DefaultTheme} from "../../../../constants/defaultTheme";

interface TaskCardStylesProps {}

const useStyles = makeStyles<DefaultTheme, TaskCardStylesProps>((theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(4),

            '&:last-child': {
                marginBottom: 0
            }
        }
    }),
);

export default useStyles;
