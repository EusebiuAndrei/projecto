import { createStyles, makeStyles } from '@material-ui/core/styles';
import {DefaultTheme} from "../../../../constants/defaultTheme";

interface ProjectCardStylesProps {}

const useStyles = makeStyles<DefaultTheme, ProjectCardStylesProps>((theme) =>
    createStyles({
        root: {
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#f9f9f9'
            }
        }
    }),
);

export default useStyles;
