import React from 'react';
import {Box, Divider, IconButton} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {ProjectOverview} from "../../../../types/projects";
import {Card, CardBody, CardFooter, CardHeader} from "../../../../ui/Card";
import Title from "../../../../ui/Title";
import Text from '../../../../ui/Text';
import StackedAvatars from "../../../../ui/StackedAvatars";
import Priority from '../../../../ui/PriorityTag';
import BorderCircularProgress from "../../../../ui/feedback/BorderCircularProgress";
import useStyles from "./ProjectCard.styles";

interface ProjectOverviewCardProps {
    projectOverview: ProjectOverview,
    onClick: React.EventHandler<any>
}

const ProjectCard: React.FC<ProjectOverviewCardProps> = ({projectOverview, onClick}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={onClick}>
            <CardHeader>
                <BorderCircularProgress value={projectOverview.progress} thickness={3} variant="determinate" withLabel size={'3.2rem'} />
                <Box>
                    <IconButton size={'small'}>
                        {projectOverview.starred ? <StarIcon /> : <StarOutlineIcon />}
                    </IconButton>
                    <IconButton size={'small'}>
                        <MoreHorizIcon />
                    </IconButton>
                </Box>
            </CardHeader>
            <CardBody>
                <Title>{projectOverview.title}</Title>
                <Text>{projectOverview.owner}</Text>
            </CardBody>
            <Divider />
            <CardFooter>
                <Priority priority={projectOverview.priority}>{projectOverview.priority}</Priority>
                <StackedAvatars />
            </CardFooter>
        </Card>
    )
}

export default ProjectCard;
