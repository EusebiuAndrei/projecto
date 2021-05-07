import {useQuery} from "react-query";
import {ProjectOverview} from "../../../types/projects";
import PriorityEnum from "../../../types/PriorityEnum";

const getProjectsOverview = async () => {
    return [
        {
            title: 'Hotel Management App',
            owner: 'Theresa Webb',
            priority: PriorityEnum.HIGH,
            progress: 50,
            starred: true,
            members: defaultMembers
        },
        {
            title: 'Remote Car Iot',
            owner: 'Dianne Russell',
            priority: PriorityEnum.LOW,
            progress: 25,
            starred: false,
            members: defaultMembers.reverse()
        },
        {
            title: 'Analytics Dashboard',
            owner: 'Courtney Henry',
            priority: PriorityEnum.MEDIUM,
            progress: 75,
            starred: false,
            members: defaultMembers.slice(2)
        },
        {
            title: 'POS Saas for Retailer',
            owner: 'Jane Cooper',
            priority: PriorityEnum.LOW,
            progress: 25,
            starred: false,
            members: defaultMembers
        },
        {
            title: 'Dell Computer Monitor',
            owner: 'Cody Fisher',
            priority: PriorityEnum.HIGH,
            progress: 85,
            starred: true,
            members: defaultMembers.reverse()
        },
        {
            title: 'E-Ticket for Balsics EO',
            owner: 'Robert Fox',
            priority: PriorityEnum.LOW,
            progress: 50,
            starred: false,
            members: defaultMembers.slice(1)
        }
    ] as ProjectOverview[];
}

const useProjectsOverviewQuery = () => {
    const projectsOverviewQuery = useQuery('projects', getProjectsOverview);

    return projectsOverviewQuery;
}

export default useProjectsOverviewQuery;

export const defaultMembers = [
    {
        name: 'John',
        url: 'https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg'
    },
    {
        name: 'Matt',
        url: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
    },
    {
        name: 'Marry',
        url: 'https://w7.pngwing.com/pngs/129/94/png-transparent-computer-icons-avatar-icon-design-male-teacher-face-heroes-logo.png'
    }
]