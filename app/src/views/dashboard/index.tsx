import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Auth from '../../Services/Auth'
import { UserType } from '../../Models/User'

import AdminDashboard from './Admin'
import ClientDashboard from './Client'

export default () => (
    Auth.isSignedIn?
    (
        Auth.user.type === UserType.Admin?
        <div>
            <Route path='/dashboard' component={AdminDashboard} />
        </div>
        :
        <div>
            <Route path='/dashboard' component={ClientDashboard} />
        </div>
    )
    : <Redirect to="/signin" />
);