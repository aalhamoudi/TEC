import * as React from 'react';
import { Area, Page } from '../../Components/Structure';

import Auth from '../../Services/Auth'
import { UserType } from '../../Models/User'

import Home from './Home';
import SignIn from './SignIn';

import Theme from './Theme'

export default (props) => (
    <Area path='/account' title="Accouunt" theme={Theme} {...props}>
        <Page exact path='/account' title="Account" component={Home} />
        <Page exact path='/account/signin' title="SignIn" component={SignIn} />
    </Area>
);