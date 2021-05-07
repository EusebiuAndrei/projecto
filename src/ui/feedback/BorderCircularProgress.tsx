import React from 'react';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
        },
        bottom: {
            color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        top: {
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
        },
        circle: {
            strokeLinecap: 'round',
        },
    }),
);

// type CircularProgressWithLabelProps = CircularProgressProps & { value: number }
interface CircularProgressWithLabelProps extends CircularProgressProps {
    value: number,
    withLabel?: boolean
}

const BorderCircularProgress: React.FC<CircularProgressWithLabelProps> = ({withLabel = false, ...props}) => {
    const classes = useStyles();

    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress
                variant="determinate"
                className={classes.bottom}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.top}
                classes={{
                    circle: classes.circle,
                }}
                {...props}
            />
            {withLabel && (
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="caption" component="div" color="textSecondary" style={{fontWeight: 'bold'}}>{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Box>
            )}
        </Box>
    );
}

export default BorderCircularProgress;