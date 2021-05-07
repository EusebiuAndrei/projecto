import {WithTheme} from "../../../../../types/material";
import {Badge, styled} from "@material-ui/core";
import React from "react";

interface ProjectStatusBadgeProps extends WithTheme {
    selected: boolean;
}

const ProjectStatusBadge = styled(({theme, selected, ...props}) => <Badge {...props}/>)(({selected, theme}: ProjectStatusBadgeProps) => ({
    '& .MuiBadge-anchorOriginTopRightRectangle': {
        right: -theme.spacing(1.5),
        backgroundColor: selected ? theme.palette.primary.main : theme.palette.text.primary
    }
}));

export default ProjectStatusBadge