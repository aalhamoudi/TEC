import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';


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



import SvgIcon from 'material-ui/SvgIcon';

export class NavIcon extends React.Component<{icon: React.ReactType}, {}> {
    render() {
        return <IconButton style={{fontSize: "3em", width: 64, height: 42}} color="inherit">{<this.props.icon />}</IconButton>;
    }
}

export class NavGroup extends React.Component<{ fill?: boolean, style?: any }, {}> {
    render() {
        return this.props.fill ? <Box style={{ flexGrow: 1 }}> {this.props.children}</Box> : <Box style={this.props.style}> {this.props.children}</Box>
    }
}

export class NavSection extends React.Component<{path: string, icon: React.ReactType, title?: string}, {}> {
    render() {
        return (
              <NavLink exact to={this.props.path} activeStyle={{backgroundColor: '#18191c'}} style={{padding: "4.5px 0"}}>
                    <NavIcon icon={this.props.icon} />
                    <h6 style={{textAlign: "center", margin: 0}}>{this.props.title}</h6>
               </NavLink>
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
            <Drawer style={{width: this.props.width || 64}} variant="permanent">
                <Sidebar style={{width: this.props.width || 64}} >
                    <NavHeader>
                        {this.props.header}
                    </NavHeader>
                    <NavContent>
                        {React.Children.map(this.props.children, (child, index) => {
                            let link = child as any;
                            return <NavSection title={link.props.title} path={link.props.path} icon={link.props.icon} />
                        })}
                    </NavContent>
                    <NavFooter>
                        {this.props.footer}
                    </NavFooter>
                </Sidebar>
            </Drawer>
        );
    }
}


export class IconNavigation extends React.Component<{path: string, match?: any}, {}> {
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
            <Split flex="right">
                <IconBar 
                    header={<NavSection path="/dashboard" icon={HomeIcon} title="Dashboard" />}
                    footer={<NavSection path="/" icon={SettingsIcon} title="Settings" />}>
                    {React.Children.map(this.props.children, (child, index) => {
                        let page = child as any;
                        return <NavSection path={page.props.path.replace(':id', this.props.match.params.id)} icon={page.props.icon} title={page.props.title} />
                    })}
                </IconBar>
                <Box>
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