import React from 'react'
import { StatusOverview } from '../../../../types/projects'
import { Card, CardHeader } from '../../../../ui/Card'
import Title from '../../../../ui/Title'
import useStyles from "./StatusColumnHeader.styles";

interface StatusColumnHeaderProps {
    statusOverview: StatusOverview
}

const StatusColumnHeader: React.FC<StatusColumnHeaderProps> = ({statusOverview}) => {
    const classes = useStyles(statusOverview);

    return (
        <Card className={classes.root}>
            <CardHeader className={classes.cardHeader}>
                <Title>{statusOverview.statusName}</Title>
                <Title>({statusOverview.total})</Title>
            </CardHeader>
        </Card>
    )
}

export default StatusColumnHeader;
