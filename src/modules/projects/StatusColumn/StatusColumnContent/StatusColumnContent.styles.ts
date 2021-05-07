import { createStyles, makeStyles } from '@material-ui/core/styles';
import {DefaultTheme} from "../../../../constants/defaultTheme";

interface StatusColumnContentStylesProps {}

const useStyles = makeStyles<DefaultTheme, StatusColumnContentStylesProps>((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column'
        }
    }),
);

export default useStyles;
