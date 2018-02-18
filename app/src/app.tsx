import * as React from 'react';

import { App, Area } from './Components/Structure';

import Portfolio from './Views/Portfolio';
import Dashboard from './Views/Dashboard';
import Account from './Views/Account';


export default () => {
    return (
        <App>
            <Portfolio />
            <Dashboard />
            <Account />
        </App>
    );
};