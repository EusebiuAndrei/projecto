import { createStyles, makeStyles } from '@material-ui/core/styles';
import {DefaultTheme} from "../../../../constants/defaultTheme";

interface ProjectsStatusStylesProps {}

const useStyles = makeStyles<DefaultTheme, ProjectsStatusStylesProps>((theme) =>
    createStyles({
        projectStatus: {
            padding: theme.spacing(1, 4),
            '&:first-child': {
                paddingLeft: 0
            },
            '&:last-child': {
                paddingRight: theme.spacing(2)
            }
        },
    }),
);

export default useStyles;
