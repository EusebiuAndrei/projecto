import {useQuery} from "react-query";
import {ProjectStatus} from "../../../types/projects";

const getProjectsStatus = async () => {
    return [
        {
            category: 'All projects',
            total: 50,
        },
        {
            category: 'In progress',
            total: 20,
        },
        {
            category: 'Done',
            total: 30
        }
    ] as ProjectStatus[];
}

const useProjectsStatusQuery = () => {
    const projectsStatusQuery = useQuery('projects_overvew', getProjectsStatus);

    return projectsStatusQuery;
}

export default useProjectsStatusQuery;