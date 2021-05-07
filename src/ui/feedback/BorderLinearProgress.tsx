import {createStyles, LinearProgress, Theme, withStyles} from "@material-ui/core";

const BorderLinearProgress = withStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: 5,
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
            borderRadius: 5,
        },
    }),
)(LinearProgress);

export default BorderLinearProgress;
