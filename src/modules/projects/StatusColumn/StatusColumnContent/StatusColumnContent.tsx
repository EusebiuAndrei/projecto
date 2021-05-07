import React from 'react';
import useStyles from "./StatusColumnContent.styles";
import {Box} from "@material-ui/core";
import {TaskPreview} from "../../../../types/projects";
import TaskCard from "../TaskCard";

interface StatusColumnContentProps {
    tasks: TaskPreview[]
}

const StatusColumnContent: React.FC<StatusColumnContentProps> = ({tasks}) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {tasks.map(task => <TaskCard key={task.title} task={task} />)}
        </Box>
    )
}

export default StatusColumnContent;