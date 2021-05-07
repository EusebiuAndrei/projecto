import React, {ReactElement} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from "../TopBar";
import LeftBar from "../LeftBar";
import Main from '../Main';
import BottomBar from "../BottomBar";
import useStyles from "./Root.styles";
import {Hidden} from "@material-ui/core";

interface RootProps {
    Content: ReactElement
}

const Root: React.FC<RootProps> = ({ Content }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopBar />
            <Hidden only={['xs']}>
                <LeftBar />
            </Hidden>
            <Hidden smUp>
                <BottomBar />
            </Hidden>
            <Main Content={Content} />
        </div>
    );
}

export default Root;