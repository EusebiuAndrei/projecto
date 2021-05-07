import { createStyles, makeStyles } from '@material-ui/core/styles';
import {DefaultTheme} from "../../../constants/defaultTheme";

interface ProjectsOverviewStylesProps {}

const useStyles = makeStyles<DefaultTheme, ProjectsOverviewStylesProps>((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(5, 0),
            display: 'grid',

            gridTemplateColumns: '1fr',
            gridGap: '2%',

            [theme.breakpoints.up('md')]: {
                gridTemplateColumns: '1fr 1fr',
                gridGap: '10%',
                padding: theme.spacing(7, 10, 0, 10),
            },
            [theme.breakpoints.up('lg')]: {
                gridTemplateColumns: '1fr 1fr 1fr',
            },
        }
    }),
);

export default useStyles;
