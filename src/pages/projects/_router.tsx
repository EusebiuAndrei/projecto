import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

const ProjectsPage = React.lazy(() => import('./index'));
const ProjectByIdPage = React.lazy(() => import('./[id]'));

const Router = () => {
    return (
        <Switch>
            <Route exact path="/projects/:id">
                <ProjectByIdPage />
            </Route>
            <Route exact path="/projects">
                <ProjectsPage />
                <Redirect to={'/projects?category=All projects'} />
            </Route>
        </Switch>
    )
}

export default Router;