import React, {Suspense} from 'react';
import {Switch, Route} from "react-router-dom";

import ProjectsRouter from './projects/_router';

const FileNotFoundPage = React.lazy(() => import('./404'));

const Page = React.lazy(() => import('./_page'));
const DashboardPage = React.lazy(() => import('./dashboard'));
const SettingsPage = React.lazy(() => import('./settings'));
const MePage = React.lazy(() => import('./me'));

const Router = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/">
                    <Page />
                </Route>
                <ProjectsRouter />
                <Route exact path="/dashboard">
                    <DashboardPage />
                </Route>
                <Route exact path="/settings">
                    <SettingsPage />
                </Route>
                <Route exact path="/me">
                    <MePage />
                </Route>
                <Route path='/'>
                    <FileNotFoundPage />
                </Route>
            </Switch>
        </Suspense>
    )
}

export default Router;