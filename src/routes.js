import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import { Login, CreateUser, Home, Profile } from 'views';
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
                    <Route
                    exact
                    path="/profile"
                    component={Profile}
                />
        </BrowserRouter>
    </>
    );
};

export default Routes;
