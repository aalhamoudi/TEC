import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import _debounce from 'underscore-es/debounce';
import _throttle from 'underscore-es/throttle';
import MenuIcon from 'material-ui-icons/Menu';
import Hammer from 'react-hammerjs';

import Box, { BoxItem } from '../Layout/Box';
import Typography from '../Content/Typography';
import { Styled, Style, StyledComponent } from '../Styles/Styled'
import Modal from '../Auxiliary/Modal';
import { Default, Mobile } from '../Utility/Responsive/Presets/Device';

import { Page } from '../Structure'
import Social from '../Content/Social';
import Phone from '../Content/Phone';
import Copyright from '../Content/Copyright';


declare function stickybits(selector: string);

export interface NavBarProps {
    links?: any[],
    brand?: string,
    fixed?: boolean
    ref?: (any) => void
};
@Styled<NavBarProps>('nav')
export class NavBar extends StyledComponent<NavBarProps, {}> {
    static style = (theme, props): Style => ({
        position: 'relative',
        width: '100%',
        height: theme.Component.height,
        top: 0,
        backgroundColor: theme.Component.backgroundColor,
        boxShadow: theme.Component.boxShadow,
        display: 'flex'
    });

    render() {
        return (
            <Box tag='nav' direction="row" justify="space-around" align="center" grow ref={this.props.ref}>
                <NavBrand image={this.props.brand} />
                <Default>
                    <NavGroup justify='flex-end'>
                        {this.props.links ? this.props.links.map((link, index) => {
                            return <NavLink key={index} title={link.title} path={link.path} icon={link.icon} />
                        }) :
                            React.Children.map(this.props.children, (child, index) => {
                                let link = child as any;
                                return <NavLink key={index} title={link.props.title} path={link.props.path} icon={link.props.icon} />
                            })}
                    </NavGroup>
                </Default>
                <Mobile>
                    <NavMenu>{this.props.children}</NavMenu>
                </Mobile>
            </Box>
        );
    }
}

export interface NavMenuProps {
    title?: string,
    fixed?: boolean
    showTitle?: boolean,
    ref?: (any) => void
};
//@Styled<NavMenuProps>()
export class NavMenu extends StyledComponent<NavBarProps, { shown: boolean }> {
    constructor(props, context?) {
        super(props, context);
        this.state = {
            shown: false
        };
    } 
    static style = (theme, props): Style => ({
        position: 'relative',
        width: 48,
        height: 48,
        border: "1px solid rgba(255, 255, 255, 0.5)",
        cursor: "pointer",
        color: "white"
    });

    onToggle() {
        this.setState({ shown: !this.state.shown });
    }

    render() {
        return (
            <div style={NavMenu.style(null, null)}>
                <MenuIcon onClick={this.onToggle.bind(this)} style={{ width: 48, height: 48 }} />
                <Modal shown={this.state.shown} toggle={this.onToggle.bind(this)} backgroundColor={'black'}>
                    <NavMenuContent>
                        <NavGroup direction='column' justify='center'>
                            {React.Children.map(this.props.children, (child, index) => {
                                let link = child as any;
                                return <NavLink title={link.props.title} path={link.props.path} icon={link.props.icon} />
                            })}
                        </NavGroup>
                    </NavMenuContent>
                </Modal>
            </div>
        );
    }
}


export interface NavMenuContentProps {

}
export class NavMenuContent extends React.Component<NavMenuContentProps, {}> {
    static contextTypes = {
        toggle: PropTypes.func,
        scrollToContent: PropTypes.func
    };

    onToggle() {
        this.context.scrollToContent();
        this.context.toggle();
    }

    render() {
        return (
            <div onClick={this.onToggle.bind(this)}>{this.props.children}</div>
        );
    }
}


export interface NavHeaderProps {
    background: string;
    brand: string;
    height?: number;
    ref?: any;
}

@Styled<NavHeaderProps>()
export class NavHeader extends React.Component<NavHeaderProps, {}> {
    static style = (theme, props): Style => ({
        backgroundImage: props.background,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        width: "100%",
        height: '100vh'
    });

    render() {
        return (
            <div style={{ height: '100%' }}>
                <div ref={this.props.ref} style={{height: '100%' }}><NavBrand image={this.props.brand}></NavBrand></div>
                {this.props.children}
            </div>
        );
    }
}

export interface NavBrandProps {
    image?: string;
    title?: string;
}

@Styled<NavBrandProps>()
export class NavBrand extends React.Component<NavBrandProps, {}> {
    static style = (theme, props): Style => ({
        cursor: "pointer"
    });

    render() {
        return (
            <Link exact to="/portfolio">
                {this.props.image ? <NavImage image={this.props.image} /> : <NavTitle>this.props.title</NavTitle>}
            </Link>
        );
    }
}



export class NavImage extends StyledComponent<{image: string}, {}> {
    render() {
        return (
            <img src={this.props.image} style={{ height: 50, cursor: "pointer"}} />
        );
    }
}

export class NavTitle extends StyledComponent<{}, {}> {
    render() {
        return (
            <NavGroup grow={0.1}>
                <Typography variant="title">{this.props.children}</Typography>
            </NavGroup>
        );
    }
}

export interface NavGroupProps {direction?: 'row' | 'column', grow?: number, justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'};
@Styled<NavGroupProps>()
export class NavGroup extends StyledComponent<NavGroupProps, {}> {
    static style = (theme, props): Style => ({
        height: '100%',
        flexGrow: props.grow
    });

    static defaultProps: Partial<NavGroupProps> = {
        direction: 'row'
    };

    static contextTypes: Partial<any> = {
        rtl: PropTypes.bool
    };

    render() {
        return (
            <Box direction={this.props.direction} justify={this.props.justify || 'center'} rtl={this.context.rtl}>
                {this.props.children}
            </Box>
        );
    }
}

export interface NavLinkProps {
    title: string,
    path: string,
    icon?: React.ReactType
};
@Styled<NavLinkProps>()
export class NavLink extends StyledComponent<NavLinkProps, {}> {
    static style = (theme, props): Style => ({
        color: theme.Component.color,
        height: theme.Component.height,
        hover: {
            color: theme.Component.hover.color,
            backgroundColor: theme.Component.hover.backgroundColor,
            textDecoration: 'none',
            cursor: "pointer",
            borderTop: "1px solid white"
        }
    });

    static contextTypes: Partial<any> = {
        scrollToContent: PropTypes.func
    };

    render() {
        return <Link exact to={this.props.path} style={{ display: 'flex', alignItems: 'center', height: 50, padding: '0 15px' }} activeStyle={{ backgroundColor: "#111", borderTop: "1px solid white" }}>
            {this.props.icon && <this.props.icon style={{ margin: "0 0px 0 0" }} />}
            <span style={{ margin: '0 5px' }}>{this.props.title}</span>
        </Link>
    }
}

export interface NavFooterProps {
    ref?: (any) => void;
}

@Styled<NavFooterProps>()
export class NavFooter extends React.Component<NavFooterProps, {}> {
    static contextTypes: Partial<any> = {
        data: PropTypes.object
    };
    static style = (theme, props) => ({
        right: 0,
        bottom: 0,
        left: 0,
        padding: 5,
        color: theme.Component.color,
        minHeight: 25,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    });
    render() {
        return (
            <React.Fragment>
                <Phone number={this.context.data.info.phone} />
                <Copyright name={this.context.data.info.name} developer={this.context.data.developer.name} url={this.context.data.developer.url} />
                <Social {...this.context.data.social} />
            </React.Fragment>
        );
    }
}

export class NavBarNavigation extends StyledComponent<{ title?: string, fixed?: boolean, header?: string, brand?: string, scrollToContent?: boolean }, {}> {
    static childContextTypes = {
        offset: PropTypes.object,
        scrollToContent: PropTypes.func,
        goUp: PropTypes.func,
        goDown: PropTypes.func

    }

    static defaultProps = {
        scrollToContent: true
    };


    navRef;
    headerRef;
    navbarRef;
    contentRef;
    footerRef;

    handler;
    throttledScroll;

    getChildContext() {
        return { offset: this.offset, scrollToContent: this.scrollToContent.bind(this), goUp: this.goUp.bind(this), goDown: this.goDown.bind(this) };
    }

    get offset() {
        return this.context.theme.Components.NavBarNavigation.offset;
    }

    get verticalOffset() {
        return this.offset.top + this.offset.bottom;
    }

    get height() {
        return document.documentElement.clientHeight;
    }

    componentDidMount() {
        //this.throttledScroll = _throttle(this.onScroll.bind(this), 350);
        //if (this.props.scrollToContent) {
        //    this.navRef = this.headerRef ? this.headerRef : this.navbarRef;
        //    this.handler = window.onwheel;
        //    window.onwheel = e => {
        //        e.preventDefault();
        //        this.handler(e);
        //        this.throttledScroll(e);
        //    };
            

        //}
    }

    scrollToContent() {
        this.contentRef.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    goUp(e) {
        if (this.contentRef.getBoundingClientRect().top >= 0) {
            this.navRef.scrollIntoView({ behavior: "smooth" });
        }
        else if (this.footerRef.getBoundingClientRect().bottom === document.documentElement.clientHeight) {
            this.contentRef.scrollIntoView({ block: "end", behavior: "smooth" });
        }
        
    }

    goDown(e) {
        if (this.contentRef.getBoundingClientRect().top > this.offset.top) {
            this.contentRef.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
        else if (this.contentRef.getBoundingClientRect().bottom <= document.documentElement.clientHeight) {
            this.footerRef.scrollIntoView({ block: "end", behavior: "smooth" });
        }
        
    }

    onScroll(e) {
        e.preventDefault();

        if (e.deltaY < 0) {
            this.goUp(e);
        }
        else if (e.deltaY > 0) {
            this.goDown(e)
        }

    };

    onSwipe(e) {
        e.preventDefault();
        switch (e.direction) {
            case 8: {
                this.goDown(e);
                break;
            };
            case 16: {
                this.goUp(e);
                break;
            };
        }
    }


    render() {
        return (
            <Box direction='column' fill="both">
                {this.props.header && <NavHeader ref={ref => this.headerRef = ReactDOM.findDOMNode(ref)} background={`url(${this.props.header})`} brand={`${this.props.brand}`} />}
                    <NavBar ref={ref => this.navbarRef = ReactDOM.findDOMNode(ref)} brand={this.props.brand} {...this.props}>
                        {this.props.children}
                    </NavBar>
     
                <main style={{display: 'flex', flexGrow: 1}} ref={ref => this.contentRef = ref}>
                    {this.props.children}
                </main>
                <NavFooter />
            </Box>            
        );
    }
}