import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Area, Page } from '../../Components/Structure';


import Auth from '../../Services/Auth';
import { UserType } from '../../Models/User';

import AdminDashboard from './Admin';
import ClientDashboard from './Client';

export default () => (
    Auth.isSignedIn?
    (
        Auth.user.type === UserType.Admin?
        <AdminDashboard />
        :
        <ClientDashboard />
        
    )
    : <Redirect to="/account/signin" />
);