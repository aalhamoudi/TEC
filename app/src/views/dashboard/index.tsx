import * as React from 'react';
import { Route } from 'react-router-dom';


import DashboardHome from './DashboardHome'

export default class Dashboard extends React.Component<{}, {}> {
    constructor(props, context) {
        super(props, context);
        
    }
    render() {
        return (
            <div>
                <Route exact path='/' component={DashboardHome} />
            </div>
        )
    }
}