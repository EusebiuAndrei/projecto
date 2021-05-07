import {Box, styled} from "@material-ui/core";

const Progress = styled(Box)(({theme}) => ({
    padding: theme.spacing(1.25),
    fontSize: '14px',
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '50%',
    fontWeight: 'bold'
}));

export default Progress;