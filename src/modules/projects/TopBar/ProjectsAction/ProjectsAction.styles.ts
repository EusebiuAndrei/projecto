import { createStyles, makeStyles } from '@material-ui/core/styles';
import {DefaultTheme} from "../../../../constants/defaultTheme";

interface ProjectsActionStylesProps {}

const useStyles = makeStyles<DefaultTheme, ProjectsActionStylesProps>((theme) =>
    createStyles({
        root: {
            display: 'flex'
        },
        gridViewButton: {
            marginLeft: theme.spacing(1)
        },
        filterButton: {
            textTransform: 'capitalize',
            fontSize: theme.spacing(2.2),
            color: '#000',
            marginLeft: theme.spacing(1)
        },
        newProjectButton: {
            textTransform: 'capitalize',
            padding: theme.spacing(0, 4),
            fontSize: theme.spacing(2),
            marginLeft: theme.spacing(1)
        }
    }),
);

export default useStyles;
