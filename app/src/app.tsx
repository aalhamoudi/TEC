import * as React from 'react';
import { Route } from 'react-router-dom';



import Portfolio from './views/Portfolio'
import Dashboard from './views/Dashboard'

export default class App extends React.Component<{}, {}> {
    constructor(props, context) {
        super(props, context);
        
    }
    render() {
        return (
            <div>
                <Route exact path='/' component={Portfolio} />
                <Route exact path='/dashboard' component={Dashboard} />
            </div>
        )
    }
}