import * as React from 'react';
import { Route } from 'react-router-dom';
import { Loadable } from 'react-loadable';


import Portfolio from './Views/Portfolio';
import Dashboard from './Views/Dashboard';

import Auth from './Services/Auth'

export default class App extends React.Component<{}, {}> {
    constructor(props, context) {
        super(props, context);
    }
    

    render() {
        return (
            <div>
                <Route exact path='/' component={Portfolio} />
                <Route path='/dashboard' component={Dashboard} />
            </div>
        )
        
    }
}