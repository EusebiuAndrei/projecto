import React from 'react';
import {Box, Button, IconButton} from "@material-ui/core";
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';
import useStyles from "./ProjectsAction.styles";

const ProjectsAction = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <IconButton>
                <ViewListIcon />
            </IconButton>
            <IconButton className={classes.gridViewButton}>
                <ViewModuleIcon />
            </IconButton>
            <Button className={classes.filterButton}>Filter</Button>
            <Button className={classes.newProjectButton} variant={'contained'} color={'primary'} size={'small'}>+ New Project</Button>
        </Box>
    )
}

export default ProjectsAction;