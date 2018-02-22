import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Area, Page } from '../../../Components/Structure';


import Home from './Home'

import Theme from '../Theme'

export default (props) => (
    <Area path="/dashboard" title="Dashboard" theme={Theme} {...props}>
        <Page exact path='/dashboard' title="Dashboard" component={Home} />
    </Area>
);