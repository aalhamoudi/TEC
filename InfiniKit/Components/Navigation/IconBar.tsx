import * as React from 'react';
import { NavLink as Link} from 'react-router-dom';

import Split from '../Layout/Split';
import Box from '../Layout/Box';
import { Styled, Style, StyledComponent } from '../Styles/Styled'


import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';

import MenuIcon from 'material-ui-icons/Menu';
import HomeIcon from 'material-ui-icons/Home';
import AccountCircle from 'material-ui-icons/AccountCircle';
import SettingsIcon from 'material-ui-icons/Settings';




export class NavIcon extends React.Component<{icon: React.ReactType}, {}> {
    render() {
        return <IconButton style={{fontSize: "3em", width: 75, height: 42}} color="inherit">{<this.props.icon />}</IconButton>;
    }
}

export class NavGroup extends React.Component<{ fill?: boolean, style?: any }, {}> {
    render() {
        return this.props.fill ? <Box direction='column' justify='flex-start' grow={1}> {this.props.children}</Box> : <Box direction='column' justify='flex-start'> {this.props.children}</Box>
    }
}

export interface NavLinkProps {to: string, icon: React.ReactType, title?: string, activeStyle?: any};
@Styled<NavLinkProps>(Link)
export class NavLink extends React.Component<NavLinkProps, {}> {
    static style = (theme, props): Style => ({
        height: 64,
        padding: "4.5px 0",
        display: 'block'
    });

    render() {
        return (
              <div>
                    <NavIcon icon={this.props.icon} />
                    {this.props.title && <h6 style={{textAlign: "center", margin: 0}}>{this.props.title}</h6>}
               </div>
        );
    }
}

export class NavSeparator extends React.Component<{}, {}> {
    render() {
        return <li>
                  <hr style={{width: 69, margin: 0}}/>
               </li>
    }
}

export class NavHeader extends React.Component<{}, {}> {
    render() {
        return (
            <NavGroup style={{backgroundColor: "#3f51b5", color: "white"}}>
                {this.props.children}
            </NavGroup>
        );
    }
}

export class NavContent extends React.Component<{}, {}> {
    render() {
        return (
            <NavGroup fill={true}>
                {this.props.children}
            </NavGroup>
        );
    }
}


export class NavFooter extends React.Component<{}, {}> {
    render() {
        return (
            <NavGroup>
                {this.props.children}
            </NavGroup>
        );
    }
}

export class IconBar extends React.Component<{width?: number, header?: React.ReactNode, footer?: React.ReactNode}, {}> {
    public render() {
        return (
            <Drawer style={{width: this.props.width || 75}} variant="permanent">
               <NavHeader>
                    {this.props.header}
                </NavHeader>
                <NavContent>
                    {this.props.children}
                </NavContent>
                <NavFooter>
                    {this.props.footer}
                </NavFooter>
            </Drawer>
        );
    }
}

export interface IconNavigationProps {path: string, match?: any, theme?: any};
@Styled<IconNavigationProps>()
export class IconNavigation extends StyledComponent<IconNavigationProps, {}> {
    render() {
        var styles = {
            toolbar: {
                color: "white"
            },
            title: {
                flex: 1
            },
            toolbarButton: {
                fontSize: "2.5em"
            }
        };
        
        return (
            <Split priority="left">
                <IconBar 
                    header={<NavLink to="/dashboard" icon={HomeIcon} />}
                    footer={<NavLink to="/" icon={SettingsIcon} title="Settings" />}>
                    {React.Children.map(this.props.children, (child, index) => {
                        let page = child as any;
                        return <NavLink to={page.props.path} icon={page.props.icon} title={page.props.title} activeStyle={this.props.theme.Component.activeStyle} />
                    })}
                </IconBar>
                <Box direction='column'>
                    <AppBar position="static">
                        <Toolbar style={styles.toolbar}>
                            <Hidden mdUp><IconButton style={styles.toolbarButton} color="inherit"><MenuIcon /></IconButton></Hidden>
                            <Typography style={styles.title} variant="title" color="inherit">Dashboard</Typography>
                            <IconButton style={styles.toolbarButton} color="inherit"><AccountCircle /></IconButton>                
                        </Toolbar>
                    </AppBar>
                    {this.props.children}
                </Box>
            </Split>
        );
    }
}