import * as React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { ZoomIn } from 'animate-css-styled-components';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import { NavLink } from '../Navigation';
import ThemeProvider from '../Styles/ThemeProvider';
import Layers from '../Layout/Layers';

export { Layer } from '../Layout/Layers';
import Animated from '../Animations/Animated';
import CSSAnimation from '../Animations/CSSAnimation';

export class App extends React.Component<{ data?: any }, {}> {
    static childContextTypes = {
        data: PropTypes.object
    };

    getChildContext() {
        return this.props.data
    }
    render() {
        return (
            <Router>
                <>{this.props.children}</>
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
                            <>
                                {this.props.nav?
                                    <this.props.nav {...this.props}>
                                        {this.props.children}
                                    </this.props.nav> :
                                    this.props.children
                                }
                            </>
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
                <Route exact={this.props.exact || false} path={this.props.path} render={(props) => {
                    console.log(props);
                    return (this.props.children);
                }} />
        );
    };
}

export class Article extends React.Component<{ animation?: React.ReactType, duration?: string, padded?: boolean }, {}> {
    static contextTypes: Partial<any> = {
        offset: PropTypes.object,
        theme: PropTypes.object,
        rtl: PropTypes.bool
    }

    static defaultProps = {
        padded: true
    };
    render() {
        let padding = this.context.theme.Components.Article.padding;
        let boxShadow = this.context.theme.Components.Article.boxShadow;
        return (
            <ZoomIn style={{ padding: padding, flexGrow: 1, display: 'flex' }}>
                <div style={{ direction: this.context.rtl && 'rtl', position: 'relative', backgroundColor: 'white', display: 'flex', flexGrow: 1, boxShadow: boxShadow, padding: this.props.padded && this.context.theme.Components.Article.contentPadding }}>
                    {this.props.children}
                </div>
            </ZoomIn>
        );
    };
}


export class Section extends React.Component<{}, {}> {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    };
}
