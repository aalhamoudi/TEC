import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Auth from '../../../Services/Auth'
import { UserType } from '../../../Models/User'

import Home from './Home'


export default () => (
    Auth.isSignedIn?
    (
        <Route exact path='/account' component={Home} />
    )
    : <Redirect to="/signin" />
);