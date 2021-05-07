import React from "react";
import ProjectCard from "./ProjectCard";
import {ProjectOverview} from "../../../../types/projects";
import { useHistory } from "react-router-dom";
import {usePathGetter} from "../../../../hooks";

interface ProjectCardControllerProps {
    projectOverview: ProjectOverview
}

const ProjectCardController: React.FC<ProjectCardControllerProps> = ({projectOverview}) => {
    const history = useHistory();
    const {getPathWithSlash} = usePathGetter();

    const goToProject = () => history.push(getPathWithSlash(projectOverview.title));

    return <ProjectCard projectOverview={projectOverview} onClick={goToProject}/>
}

export default ProjectCardController;