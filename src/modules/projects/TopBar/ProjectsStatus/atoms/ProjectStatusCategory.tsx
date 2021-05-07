import {WithTheme} from "../../../../../types/material";
import {Link, styled} from "@material-ui/core";
import React from "react";

interface ProjectStatusCategoryProps extends WithTheme {
    selected: boolean;
}

const ProjectStatusCategory = styled(({theme, selected, ...props}) => <Link {...props}/>)(({selected, theme}: ProjectStatusCategoryProps) => ({
    textDecoration: 'none',
    fontSize: theme.spacing(2.5),
    paddingBottom: theme.spacing(0.75),
    color: selected ? theme.palette.primary.main : theme.palette.text.primary,
    borderBottom: selected ? `1px solid ${theme.palette.primary.main}` : `1px solid transparent`
}));

export default ProjectStatusCategory;