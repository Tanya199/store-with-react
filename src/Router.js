import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';
import AdminPage from './pages/adminpage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/admin' component={AdminPage} />
        <Route exact path='/cart' component={CartPage} />
    </Switch>
);

export default Router;