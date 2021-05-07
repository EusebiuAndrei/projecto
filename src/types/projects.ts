import PriorityEnum from "./PriorityEnum";

export interface ProjectStatus {
    category: string;
    total: number;
}

export interface ProjectOverview {
    title: string;
    owner: string;
    progress: number;
    priority: PriorityEnum,
    starred: boolean,
    members: MemberAvatar[],
}

export interface MemberAvatar {
    url: string;
    name: string;
}

export interface TaskPreview {
    title: string;
    priority: PriorityEnum,
    assignees: MemberAvatar[];
    commentsCount: number;
    attachmentsCount: number;
}

export interface StatusOverview {
    statusName: string,
    total: number,
    tasks: TaskPreview[]
}