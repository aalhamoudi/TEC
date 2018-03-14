import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import { SlideInUp } from 'animate-css-styled-components'

import { Area } from '../Structure';
import Box from '../Layout/Box';
import { ThemeProvider, Styled, Style } from '../Styles/';
import Router from '../Utility/Router';
import { NavBar, NavLink } from '../Navigation/NavBar';

interface PresentationAreaProps {
    title: string,
    path: string,
    nav?: React.ReactType,
    theme?: any,
    exact?: boolean
}

enum Section {
    Header,
    Content,
    Footer
}

export class PresentationArea extends React.Component<PresentationAreaProps, { pages: string[], currentPage: number }> {
    router;

    static childContextTypes = {
        paths: PropTypes.object
    };

    getChildContext() {
        return {
            paths: {
                header: this.props.path,
                footer: `${this.props.path}/more`
            }
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            pages: new Array(),
            currentPage: 0
        };
    }

    goUp() {
        if (this.state.currentPage > 0) {
            this.setState({pages: this.state.pages, currentPage: this.state.currentPage - 1}, () => this.router.history.push(this.state.pages[this.state.currentPage]));
            
        }
    }

    goDown() {
        if (this.state.currentPage < this.state.pages.length - 1) {
            this.setState({pages: this.state.pages, currentPage: this.state.currentPage + 1}, () => this.router.history.push(this.state.pages[this.state.currentPage]));
            
        }
    }

    handleScroll(e) {
        if (e.deltaY < 0)
            this.goUp();
        else
            this.goDown();
    }

    componentDidUpdate() {
        let index = this.state.pages.indexOf(this.router.location.pathname)
        if (this.state.currentPage !== index)
            this.setState({ pages: this.state.pages, currentPage: index })
    }

    componentDidMount() {
        let pages = new Array<string>();
        if (this.header) {
            pages.push(this.props.path)
        }

        if (this.content) {
            //var content = this.content.props.children.map((child, index) => {
            //    let page = child as any;
            //    return page.props.path;
            //});
            //pages = pages.concat(content);
            pages.push(this.content.props.children[0].props.path);
        }

        if (this.footer) {
            pages.push(`${this.props.path}/more`);
        }

        console.log(pages.length)

        this.setState({
            pages: pages,
            currentPage: pages.indexOf(this.router.location.pathname)
        });
    }
    header;
    content;
    footer;

    render() {
        React.Children.forEach(this.props.children, (child) => {
            let component = child as any;
            if (component.type === Header)
                this.header = component;
            else if (component.type === Footer)
                this.footer = component;
            else if (component.type === Content)
                this.content = component;
        });
        let links = this.content.props.children.map((child, index) => { let page = child as any; return { path: page.props.path, title: page.props.title, icon: page.props.icon } });
        return (
            <Route path={this.props.path} render={props => {
                this.router = {...props};
                return (
                    <ThemeProvider theme={this.props.theme}>
                        <div style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }} onWheel={this.handleScroll.bind(this)}>
                            <Box direction='column' fill='both'>
                                <Route path={this.props.path}><NavBar links={links} /></Route>
                                <Switch>
                                    <Route exact path={this.props.path}><PresentationHeader shown={this.router.location.pathname === this.props.path} links={links} {...this.header.props} /></Route>
                                    <PresentationContent>{this.content.props.children}</PresentationContent>
                                    <Route exact path={`${this.props.path}/more`}><PresentationFooter shown={this.router.location.pathname === `${this.props.path}/more`} {...this.footer.props} /></Route>
                                </Switch>
                            </Box>
                        </div>
                    </ThemeProvider>
                );
            }} />
        );
    };
}

interface Link {
    path: string;
    title: string;
    icon: React.ReactType;
}


interface PresentationHeaderProps {
    shown: boolean;
    links: Link[];
    background: string;
    brand: string;
}
@Styled<PresentationHeaderProps>()
export class PresentationHeader extends React.Component<PresentationHeaderProps, {}> {
    static style = (theme, props) => ({
        backgroundImage: `url(${props.background})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        width: "100%",
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    });
    render() {
        return (
            <a href="/portfolio">
                <img src={this.props.brand} />
            </a>
        );
    }
}




interface PresentationContentProps {
}
export class PresentationContent extends React.Component<PresentationContentProps, {}> {
    render() {
        return (
            <>{this.props.children}</>
        );
    }
}

interface PresentationPageProps {

}
export class PresentationPage extends React.Component<PresentationPageProps, {}> {
    render() {
        return (
            <div></div>
        );
    }
}



interface PresentationFooterProps {
    shown: boolean;
}

@Styled<PresentationFooterProps>()
export class PresentationFooter extends React.Component<PresentationFooterProps, {}> {
    static style = (theme, props) => ({
        backgroundColor: theme.Component.backgroundColor,
        color: theme.Component.color,
        minHeight: '100vh',
        display: 'flex'
    });

    ref;

    render() {
        return (
            <Transition ref={ref => this.ref = ReactDOM.findDOMNode(ref)} in={this.props.shown} appear timeout={1000} onEntering={(() => { this.ref.classList.add('animated', 'bounce') }).bind(this)}>
                <Box justify='center' align='center' grow>&copy; 2018 Infinitivity All Rights Reserved.</Box>
            </Transition>
        );
    }
}



interface HeaderProps {
    background: string;
    brand: string;
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return this.props.children;
    }
}

interface ContentProps {
}

export class Content extends React.Component<ContentProps, {}> {
    render() {
        return this.props.children;
    }
}

interface FooterProps {

}

export class Footer extends React.Component<FooterProps, {}> {
    render() {
        return this.props.children;
    }
}