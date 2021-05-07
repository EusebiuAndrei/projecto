import React from 'react';
import useProjectsOverviewQuery from "../../../hooks/api/projects/useProjectsOverviewQuery";
import {Box} from "@material-ui/core";
import ProjectCard from './ProjectCard';
import useStyles from "./ProjectsOverview.styles";

const ProjectsOverview = () => {
    const classes = useStyles();
    const {data} = useProjectsOverviewQuery();

    return (
        <Box className={classes.root}>
            {data?.map(projectOverview => <ProjectCard key={projectOverview.title} projectOverview={projectOverview} />)}
        </Box>
    )
}

export default ProjectsOverview;