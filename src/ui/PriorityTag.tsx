import {WithTheme} from "../types/material";
import PriorityEnum from "../types/PriorityEnum";
import {Button, styled} from "@material-ui/core";
import React from "react";

interface PriorityProps extends WithTheme {
    priority: PriorityEnum
}

const Priority = styled(({theme, priority, ...props}) => <Button {...props}/>)(({priority, theme}: PriorityProps) => ({
    color: theme.custom.colors.priority[priority],
    border: `1px solid ${theme.custom.colors.priority[priority]}`
}));

export default Priority;