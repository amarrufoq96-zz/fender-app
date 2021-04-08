import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import { Login, CreateUser, Home, Profile, UsersList } from 'views';
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
                <Route
                    exact
                    path="/users"
                    component={UsersList}
                />
        </BrowserRouter>
    </>
    );
};

export default Routes;
