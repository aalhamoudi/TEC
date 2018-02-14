import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';

import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';



import SvgIcon from 'material-ui/SvgIcon';

export class NavIcon extends React.Component<{icon: React.ReactType}, {}> {
    render() {
        return <IconButton style={{fontSize: "4em", width: 64, height: 64}} color="inherit">{<this.props.icon />}</IconButton>;
    }
}

export class NavGroup extends React.Component<{ fill?: boolean, style?: any }, {}> {
    render() {
        return this.props.fill ? <Box style={{ flexGrow: 1 }}> {this.props.children}</Box> : <Box style={this.props.style}> {this.props.children}</Box>
    }
}

export class NavSection extends React.Component<{link: string, icon: React.ReactType, title?: string}, {}> {
    render() {
        return (
              <NavLink exact to={this.props.link} activeStyle={{backgroundColor: '#18191c'}}>
                    <NavIcon icon={this.props.icon} />
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
            <NavGroup style={{backgroundColor: "#333"}}>
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

export class NavBar extends React.Component<{width?: number, header?: React.ReactNode, footer?: React.ReactNode}, {}> {
    public render() {
        return (
            <Drawer style={{width: this.props.width || 64}} variant="permanent">
                <Sidebar style={{width: this.props.width || 64}} >
                    <NavHeader>
                        {this.props.header}
                    </NavHeader>
                    <NavContent>
                        {this.props.children}
                    </NavContent>
                    <NavFooter>
                        {this.props.footer}
                    </NavFooter>
                </Sidebar>
            </Drawer>
        );
    }
}
