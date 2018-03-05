import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Stickybits from '../Utility/Stickybits';

import Box, { BoxItem } from '../Layout/Box';
import Typography from '../Content/Typography';
import { Styled, Style, StyledComponent } from '../Styles/Styled'
import Sticky from '../Utility/Sticky';

import * as navHeaderBg from "../../Images/crescent-drive.jpg";
import * as navBrandImg from "../../Images/navbrand.png";

declare function stickybits(selector: string);

interface NavBarProps {
    title?: string,
    fixed?: boolean
    showTitle?: boolean
};
@Styled<NavBarProps>(Sticky, props => ({className: 'navbar'}))
export class NavBar extends StyledComponent<NavBarProps, {}> {
    static style = (theme, props): Style => ({
        position: 'sticky',
        width: '100%',
        height: theme.Component.height,
        top: 0,
        backgroundColor: theme.Component.backgroundColor,
        boxShadow: theme.Component.boxShadow
    });

    componentDidMount() {
        //new Stickybits('nav');
    }

    render() {
        return (
            <Box tag='nav' direction="row" align="center">
                {this.props.showTitle && <NavTitle>{this.props.title}</NavTitle>}
                <NavGroup justify='center'>
                    {React.Children.map(this.props.children, (child, index) => {
                        let link = child as any;
                        return <NavLink title={link.props.title} path={link.props.path} icon={link.props.icon} />
                    })}
                </NavGroup>
            </Box>
        );
    }
}

interface NavHeaderProps {
    background: string;
    brand: string;
}

@Styled<NavHeaderProps>()
export class NavHeader extends React.Component<NavHeaderProps, {}> {
    static style = (theme, props): Style => ({
        backgroundImage: props.background,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        width: "100%",
        height: 600

    });

    render() {
        return (
            <NavBrand image={this.props.brand}></NavBrand>
        );
    }
}

interface NavBrandProps {
    image: string;
}

@Styled<NavBrandProps>()
export class NavBrand extends React.Component<NavBrandProps, {}> {
    static style = (theme, props): Style => ({
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: "20%"
    });

    render() {
        return (
            <a href="/portfolio">
                <img src={this.props.image} />
            </a>
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

interface NavGroupProps {grow?: number, justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'};
@Styled<NavGroupProps>()
export class NavGroup extends StyledComponent<NavGroupProps, {}> {
    static style = (theme, props): Style => ({
        height: '100%',
        flexGrow: props.grow || 1
    });

    render() {
        return (
            <Box direction='row' justify={this.props.justify || 'center'}>
                {this.props.children}
            </Box>
        );
    }
}

interface NavLinkProps {
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

    render() {
        return <Link exact to={this.props.path} style={{display: 'flex', alignItems: 'center', height: 50, padding: 15}} activeStyle={{ backgroundColor: "#111", borderTop: "1px solid white" }}>
            {this.props.icon && <this.props.icon style={{margin: "0 5px 0 0"}} />}
            {this.props.title}
        </Link>
    }
}

export class NavBarNavigation extends StyledComponent<{title?: string, fixed?: boolean, header?: string, brand?: string}, {}> {
    render() {
        return (
            <Box direction='column'>
                {this.props.header && <NavHeader background={`url(${this.props.header})`} brand={`${this.props.brand}`} />}
                <NavBar showTitle={this.props.brand? false : true} {...this.props}>
                    {React.Children.map(this.props.children, (child, index) => {
                        let page = child as any;
                        return <NavLink title={page.props.title} path={page.props.path} icon={page.props.icon} />
                    })}
                </NavBar>
                <div style={{marginTop: 58, width: "100%", height: "100%"}}>
                    {this.props.children}
                </div>
            </Box>
            
        );
    }
}