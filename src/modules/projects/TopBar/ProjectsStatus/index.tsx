import React from 'react';
import ProjectsStatus from "./ProjectsStatus";
import useProjectsStatusQuery from "../../../../hooks/api/projects/useProjectsStatusQuery";
import { useSearchParams } from "../../../../hooks";
import { CircularProgress } from '@material-ui/core';

const ProjectsStatusController: React.FC = () => {
    const { data: projectsStatus, isLoading } = useProjectsStatusQuery();

    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category') || '';

    if (isLoading) return <CircularProgress />

    return <ProjectsStatus projectsStatus={projectsStatus!} currentCategory={currentCategory}/>
}

export default ProjectsStatusController;