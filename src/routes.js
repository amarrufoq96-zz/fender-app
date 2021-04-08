import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from 'layouts';
import { Login } from 'views';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    layout={Main}
                    component={Login}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
