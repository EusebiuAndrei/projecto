import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import useStyles from "./LeftBar.styles";
import Navigation from '../Navigation';

function LeftBar() {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, classes.drawerClose)}
            classes={{paper: classes.drawerClose}}
        >
            <div style={{position: 'fixed', top: '0'}}>
                <div className={classes.toolbar}>
                    <IconButton className={classes.logo}>
                        <InboxIcon />
                    </IconButton>
                </div>
                <Divider light/>
            </div>
            <Navigation className={classes.navigation}
                        actionClasses={{root: classes.navigationItem, selected: classes.navigationItemSelected, label: classes.navigationItemLabel}}/>
        </Drawer>
    );
}

export default LeftBar;
