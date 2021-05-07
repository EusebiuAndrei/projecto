import { Box } from '@material-ui/core';
import React from 'react';
import useStyles from "./StatusColumn.styles";
import { StatusOverview } from '../../../types/projects';
import StatusColumnHeader from './StatusColumnHeader';
import StatusColumnContent from "./StatusColumnContent";

interface StatusColumnProps {
    statusOverview: StatusOverview
}

const StatusColumn: React.FC<StatusColumnProps> = ({statusOverview}) => {
    const classes = useStyles();

    return (
      <Box className={classes.root}>
        <StatusColumnHeader statusOverview={statusOverview}/>
        <StatusColumnContent tasks={statusOverview.tasks} />
      </Box>
  )
};

export default StatusColumn;