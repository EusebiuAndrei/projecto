import React from 'react';
import BottomNavigationAction, {BottomNavigationActionProps} from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";
import BottomNavigation, {BottomNavigationProps} from "@material-ui/core/BottomNavigation";
import {Link, useLocation} from "react-router-dom";

interface NavigationProps extends BottomNavigationProps {
    actionClasses?: BottomNavigationActionProps['classes']
}

const Navigation: React.FC<NavigationProps> = ({className, actionClasses, ...others}) => {
    const {pathname} = useLocation();
    const pathnameRoot = pathname.split('/')[1];

    return (
        <BottomNavigation value={pathnameRoot} className={className} {...others}>
            <BottomNavigationAction label="Projects" value="projects" icon={<RestoreIcon />} classes={actionClasses} component={Link} to="/projects" />
            <BottomNavigationAction label="Dashboard" value="dashboard" icon={<FavoriteIcon />} classes={actionClasses} component={Link} to="/dashboard" />
            <BottomNavigationAction label="Settings" value="settings" icon={<LocationOnIcon />} classes={actionClasses} component={Link} to="/settings" />
            <BottomNavigationAction label="Me" value="me" icon={<FolderIcon />} classes={actionClasses} component={Link} to="/me" />
        </BottomNavigation>
    );
}

export default Navigation;