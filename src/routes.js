import React from 'react';
import { BrowserRouter, Switch, Route, useLocation  } from 'react-router-dom';
import { Main } from 'layouts';
import { Login, CreateUser, Home } from 'views';
import { MenuBar } from 'common/components';

const Routes = () => {
    console.log(window.location.pathname, '<---window.location.pathname');
    return (
    <>
        {
            window.location.pathname !== '/'
            ? <MenuBar />
            : null
        }
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Login}
                />
                <Route
                    exact
                    path="/create"
                    component={CreateUser}
                />
                <Route
                    exact
                    path="/home"
                    component={Home}
                />
            </Switch>
        </BrowserRouter>
    </>
    );
};

export default Routes;
