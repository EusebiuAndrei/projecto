import React from 'react';
import useStyles from "./TaskCard.styles";
import {TaskPreview} from "../../../../types/projects";
import {Card, CardBody, CardFooter, CardHeader} from "../../../../ui/Card";
import {Divider, IconButton} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Title from "../../../../ui/Title";
import Priority from "../../../../ui/PriorityTag";
import StackedAvatars from "../../../../ui/StackedAvatars";

interface TaskCardProps {
    task: TaskPreview
}

const TaskCard: React.FC<TaskCardProps> = ({task}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader>
                <Title>{task.title}</Title>
                <IconButton size={'small'}>
                    <MoreHorizIcon />
                </IconButton>
            </CardHeader>
            <CardBody>
            </CardBody>
            <Divider />
            <CardFooter>
                <Priority priority={task.priority}>{task.priority}</Priority>
                <StackedAvatars />
            </CardFooter>
        </Card>
    );
}

export default TaskCard;