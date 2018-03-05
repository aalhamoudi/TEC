import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { ZoomIn } from 'animate-css-styled-components';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import { NavLink } from '../Navigation';
import ThemeProvider from '../Styles/ThemeProvider';
import Layers from '../Layout/Layers';

export { Layer } from '../Layout/Layers';

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <Router>
                <div>{this.props.children}</div>
            </Router>
        );
    };
}

export class Area extends React.Component<{title: string, path: string, nav?: React.ReactType, theme?: any, exact?: boolean, header?: string, brand?: string}, {}> {
    router;

    render() {
        const muiTheme = createMuiTheme();
        return (
            <Route exact={this.props.exact || false} path={this.props.path} render={(props) => {
                this.router = {...props};
                return (
                    <MuiThemeProvider theme={muiTheme}>
                        <ThemeProvider theme={this.props.theme}>
                            <div style={{width: '100%', height: '100vh'}}>
                                {this.props.nav?
                                    <this.props.nav {...this.props}>
                                        {this.props.children}
                                    </this.props.nav> :
                                    this.props.children
                                }
                            </div>
                        </ThemeProvider>
                    </MuiThemeProvider>
                );
            }} />
        );
    };
}

export class Page extends React.Component<{title: string, path: string, icon?: React.ReactType, component?: React.ComponentClass, exact?: boolean}, {}> {
    render() {
        return (
            this.props.component?
            <Route exact={this.props.exact || false} path={this.props.path} component={this.props.component} /> :
            <Route exact={this.props.exact || false} path={this.props.path} render={() => (this.props.children)} />
        );
    };
}

export class Article extends React.Component<{animation?: React.ReactType, duration?: string}, {}> {
    render() {
        return (
          <Layers>
            {this.props.animation?
            <this.props.animation duration={this.props.duration || "1s"}>{this.props.children}</this.props.animation> :
            <ZoomIn duration="1s">{this.props.children}</ZoomIn>}
          </Layers>
        );
    };
}


export class Section extends React.Component<{}, {}> {
    render() {
        return (
            <div></div>
        );
    };
}
