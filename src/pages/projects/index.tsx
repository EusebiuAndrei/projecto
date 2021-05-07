import React from 'react';
import {Box} from "@material-ui/core";
import TopBar from "../../modules/projects/TopBar";
import ProjectsOverview from "../../modules/projects/ProjectsOverview/ProjectsOverview";

const index = () => {
    return (
        <>
            <Box>
                <TopBar />
                <ProjectsOverview />
            </Box>
        </>
    )
}

export default index;