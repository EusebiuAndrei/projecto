import React from 'react';
import {Box} from "@material-ui/core";
import ProjectsStatus from "./ProjectsStatus";
import ProjectsAction from "./ProjectsAction/ProjectsAction";
import useStyles from "./TopBar.styles";

const TopBar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <ProjectsStatus />
            <ProjectsAction />
        </Box>
    )
}

export default TopBar;