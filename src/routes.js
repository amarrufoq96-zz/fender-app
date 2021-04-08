import React from 'react';
import { BrowserRouter, Switch, Route, useLocation  } from 'react-router-dom';
import { Main } from 'layouts';
import { Login, CreateUser, Home } from 'views';
import { MenuBar } from 'common/components';

const Routes = () => {
    return (
    <>
        <BrowserRouter>
            <Route component={MenuBar} />
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
        </BrowserRouter>
    </>
    );
};

export default Routes;
