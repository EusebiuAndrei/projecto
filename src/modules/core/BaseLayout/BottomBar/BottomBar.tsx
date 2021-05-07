import React from 'react';
import useStyles from "./BottomBar.styles";
import Navigation from "../Navigation";

function LabelBottomNavigation() {
    const classes = useStyles();

    return (
        <Navigation className={classes.root} actionClasses={{root: classes.navigationItem, selected: classes.navigationItemSelected, label: classes.navigationItemLabel}}/>
    );
}

export default LabelBottomNavigation;