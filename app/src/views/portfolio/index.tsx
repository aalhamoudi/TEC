import * as React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home'

export default () => (
    <div>
        <Route exact path='/' component={Home} />
    </div>
);