import {styled, Typography} from "@material-ui/core";

const Title = styled(Typography)(({theme}) => ({
    fontSize: theme.typography.h5.fontSize,
    fontWeight: 'bold'
}));

export default Title;