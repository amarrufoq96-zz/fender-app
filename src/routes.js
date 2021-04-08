import React from 'react';
import { BrowserRouter, Switch, Route, useLocation  } from 'react-router-dom';
import { Main } from 'layouts';
import { Login } from 'views';
import { MenuBar } from 'common/components';

const Routes = () => {
    const location = useLocation;
    return (
    <>
        {
            location === '/'
            ? <MenuBar />
            : null
        }
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
    </>
    );
};

export default Routes;
