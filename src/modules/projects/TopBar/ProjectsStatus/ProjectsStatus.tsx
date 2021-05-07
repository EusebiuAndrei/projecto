import React from 'react';
import {
    List,
    ListItem,
} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";
import useStyles from "./ProjectsStatus.styles";
import ProjectStatusBadge from "./atoms/ProjectStatusBadge";
import ProjectStatusCategory from "./atoms/ProjectStatusCategory";
import {ProjectStatus} from "../../../../types/projects";

interface ProjectsStatusProps {
    projectsStatus: ProjectStatus[],
    currentCategory: string
}

const ProjectsStatus: React.FC<ProjectsStatusProps> = ({projectsStatus, currentCategory}) => {
    const classes = useStyles();

    return <List style={{display: 'flex'}}>
        {projectsStatus?.map(projectStatus => (
            <ListItem key={projectStatus.category} className={classes.projectStatus}>
                <ProjectStatusBadge
                    badgeContent={projectStatus.total}
                    color="primary"
                    selected={projectStatus.category === currentCategory}
                >
                    <ProjectStatusCategory
                        component={RouterLink}
                        to={`/projects?category=${projectStatus.category}`}
                        selected={projectStatus.category === currentCategory}
                    >
                        {projectStatus.category}
                    </ProjectStatusCategory>
                </ProjectStatusBadge>
            </ListItem>
        ))}
    </List>
}

export default ProjectsStatus;