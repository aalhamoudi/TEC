import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import Box, { BoxItem } from '../Layout/Box';
import Typography from '../Content/Typography';
import { Styled, Style, StyledComponent } from '../Styles/Styled'

interface NavBarProps {title: string, fixed?: boolean};
@Styled<NavBarProps>()
export class NavBar extends StyledComponent<NavBarProps, {}> {
    static style = (theme, props): Style => ({
        position: 'fixed',
        width: '100%',
        height: theme.Component.height,
        top: 0,
        backgroundColor: theme.Component.backgroundColor,
        boxShadow: theme.Component.boxShadow
    });
    render() {
        return (
            <Box tag='nav' direction="row" align="center">
                <NavBrand>{this.props.title}</NavBrand>
                <NavGroup justify='flex-end'>
                    {React.Children.map(this.props.children, (child, index) => {
                        let link = child as any;
                        return <NavLink title={link.props.title} path={link.props.path} icon={link.props.icon} />
                    })}
                </NavGroup>
            </Box>
        );
    }
}

export class NavBrand extends StyledComponent<{}, {}> {
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
            <Box direction='row' justify={this.props.justify || 'center'} align='center'>
                {this.props.children}
            </Box>
        );
    }
}

interface NavLinkProps {classes?: any, title: string, path: string, icon?: React.ReactType};
@Styled<NavLinkProps>()
export class NavLink extends StyledComponent<NavLinkProps, {}> {
    static style = (theme, props): Style => ({
        color: theme.Component.color,
        margin: theme.Component.margin,
        hover: {
            color: theme.Component.hoverColor,
            textDecoration: 'none'
        }
    });

    render() {
        return <Link exact to={this.props.path} activeStyle={{textDecoration: 'underline !important'}}>{this.props.title}</Link>
    }
}

export class NavBarNavigation extends StyledComponent<{classes?: any, title: string, fixed?: boolean}, {}> {
    render() {
        return (
            <Box direction='column'>
                <NavBar {...this.props}>
                    {React.Children.map(this.props.children, (child, index) => {
                        let page = child as any;
                        return <NavLink title={page.props.title} path={page.props.path} />
                    })}
                </NavBar>
                <div style={{marginTop: 58}}>
                    {this.props.children}
                </div>
            </Box>
            
        );
    }
}