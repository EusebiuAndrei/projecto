import {Box, Card as MaterialCard, styled} from "@material-ui/core";

// All here because they are compound components

export const Card = styled(MaterialCard)(({theme}) => ({

}));

export const CardHeader = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(3, 4),
}));

export const CardBody = styled(Box)(({theme}) => ({
    padding: theme.spacing(0, 4, 4, 4),
}));

export const CardFooter = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(3, 4),
}));