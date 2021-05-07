import { createStyles, makeStyles } from '@material-ui/core/styles';
import {DefaultTheme} from "../../../constants/defaultTheme";

const useStyles = makeStyles((theme: DefaultTheme) =>
    createStyles({
        root: {
            flexBasis: '350px'
        }
    }),
);

export default useStyles;
