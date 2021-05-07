import React from 'react';
import {Box, styled} from "@material-ui/core";
import { StatusOverview } from '../../types/projects';
import StatusColumn from '../../modules/projects/StatusColumn';
import PriorityEnum from "../../types/PriorityEnum";
import {defaultMembers} from "../../hooks/api/projects/useProjectsOverviewQuery";

const index = () => {
    return (
        <Container>
            {statuses.map(statusOverview => <StatusColumn key={statusOverview.statusName} statusOverview={statusOverview}/>)}
        </Container>
    )
}

export default index;

const Container = styled(Box)(({theme}) => ({
    padding: theme.spacing(5, 10),
    display: 'flex',
    justifyContent: 'space-between'
}));

const statuses: StatusOverview[] = [
    {
        statusName: 'Emphatize',
        total: 3,
        tasks: [
            {
                title: 'Design mindtree profile page',
                priority: PriorityEnum.HIGH,
                assignees: defaultMembers,
                commentsCount: 5,
                attachmentsCount: 4
            },
            {
                title: 'Design mindtree profile page',
                priority: PriorityEnum.HIGH,
                assignees: defaultMembers,
                commentsCount: 5,
                attachmentsCount: 4
            },
        ]
    },
    {
        statusName: 'Define',
        total: 2,
        tasks: [
            {
                title: 'Design mindtree profile page',
                priority: PriorityEnum.HIGH,
                assignees: defaultMembers,
                commentsCount: 5,
                attachmentsCount: 4
            },
        ]
    },
    {
        statusName: 'Ideate',
        total: 0,
        tasks: [
            {
                title: 'Design mindtree profile page',
                priority: PriorityEnum.HIGH,
                assignees: defaultMembers,
                commentsCount: 5,
                attachmentsCount: 4
            },
            {
                title: 'Design mindtree profile page',
                priority: PriorityEnum.HIGH,
                assignees: defaultMembers,
                commentsCount: 5,
                attachmentsCount: 4
            },
        ]
    },
    {
        statusName: 'Prototype',
        total: 2,
        tasks: [
            {
                title: 'Design mindtree profile page',
                priority: PriorityEnum.HIGH,
                assignees: defaultMembers,
                commentsCount: 5,
                attachmentsCount: 4
            },
        ]
    }
]