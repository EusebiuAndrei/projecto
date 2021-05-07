import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Avatar, Divider, Hidden, TextField} from "@material-ui/core";
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./TopBar.styles";

function TopBar() {
    const classes = useStyles();

    return (
        <>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar style={{display: 'flex', alignContent: 'center'}} className={classes.toolbar}>
                    <Hidden smUp>
                        <IconButton style={{marginRight: 'auto'}}>
                            <NotificationsOutlinedIcon />
                        </IconButton>
                    </Hidden>
                    <Hidden only={['xs']}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" size={"small"} style={{marginRight: 'auto'}}/>
                    </Hidden>
                    <IconButton>
                        <NotificationsOutlinedIcon />
                    </IconButton>
                    <Avatar style={{marginRight: '8px'}}>H</Avatar>
                    <Hidden only={['xs']}>
                        <Typography noWrap >John Doe</Typography>
                    </Hidden>
                </Toolbar>
                <Divider />
                <Hidden smUp>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" size={"small"} style={{marginRight: 'auto', width: '100%', borderRadius: '0px !important'}}/>
                </Hidden>
            </AppBar>
        </>
    );
}

export default TopBar;
