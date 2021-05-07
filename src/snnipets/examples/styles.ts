import { createStyles, makeStyles } from '@material-ui/core/styles';
import {StatusOverview} from "../../types/projects";
import {DefaultTheme} from "../../constants/defaultTheme";

const useStyles = makeStyles<DefaultTheme, StatusOverview>((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2, 4),
            // An example of INTERPOLATION in styles
            backgroundColor: props => props.total === 2 ? 'aquamarine' : 'red'
        }
    }),
);

export default useStyles;
