import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';


import Home from './Home'

export default () => (
    <div>
        <Route exact path='/dashboard' component={Home} />
    </div>
);