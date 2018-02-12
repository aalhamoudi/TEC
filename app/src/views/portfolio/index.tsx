import * as React from 'react';
import { Route } from 'react-router-dom';



import PortfolioHome from './PortfolioHome'

export default class App extends React.Component<{}, {}> {
    constructor(props, context) {
        super(props, context);
        
    }
    render() {
        return (
            <div>
                <Route exact path='/' component={PortfolioHome} />
            </div>
        )
    }
}