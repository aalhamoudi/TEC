import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import Box from 'grommet/components/Box';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    navbar: {
        position: 'fixed',
        width: '100%',
        height: '50px',
        'background-color': theme.navbar.backgroundColor,
        'box-shadow': theme.navbar.boxShadow
    },
    navcontainer: {
        height: '100%'
    },
    navgroup: {
        height: '100%'
    },
    navlink: {
        color: theme.navlink.color,
        margin: theme.navlink.margin,
        '&:hover': {
            color: theme.navlink.hoverColor,
            'text-decoration': 'none'
        }
    },
    navlink_active: {
        'text-decoration': theme.navlink.active.textDecoration
    }
});

@injectSheet(styles)
export class Navbar extends React.Component<{classes?: any, title: string, fixed?: boolean}, {}> {
    render() {
        return (
            <nav className={this.props.classes.navbar}>
                <Box className={this.props.classes.navcontainer} direction='row' align='center'>
                    <NavbarGroup flex={0.1}>
                        <Typography variant="title">{this.props.title}</Typography>
                    </NavbarGroup>
                    <NavbarGroup justify='end'>
                        {React.Children.map(this.props.children, (child, index) => {
                            let link = child as any;
                            return <NavLink title={link.props.title} path={link.props.path} icon={link.props.icon} />
                        })}
                    </NavbarGroup>
                    </Box>
            </nav>
        );
    }
}

@injectSheet(styles)
export class NavbarGroup extends React.Component<{classes?: any, flex?: number, justify?: string}, {}> {
    render() {
        return (
            <Box className={this.props.classes.navgroup} style={{flexGrow: this.props.flex}} direction='row' flex='grow' justify={this.props.justify || 'center'} align='center' pad='medium'>
                {this.props.children}
            </Box>
        );
    }
}

@injectSheet(styles)
export class NavbarDivider extends React.Component<{classes?: any, flex?: number}, {}> {
    render() {
        return (
            <Box className={this.props.classes.navgroup} style={{flexGrow: this.props.flex}} direction='row' flex='grow' justify='around' align='center'>
                {this.props.children}
            </Box>
        );
    }
}

@injectSheet(styles)
export class NavLink extends React.Component<{classes?: any, title: string, path: string, icon?: React.ReactType}, {}> {
    render() {
        return <Link exact to={this.props.path} className={this.props.classes.navlink} activeClassName={this.props.classes.navlink_active}>{this.props.title}</Link>
    }
}

export class NavbarNavigation extends React.Component<{classes?: any, title: string, fixed?: boolean}, {}> {
    render() {
        return (
            <div>
                <Navbar {...this.props}>
                    {React.Children.map(this.props.children, (child, index) => {
                        let page = child as any;
                        return <NavLink title={page.props.title} path={page.props.path} />
                    })}
                </Navbar>
                <div style={{paddingTop: 50, height: '100%'}}>
                    {this.props.children}
                </div>
            </div>
            
        );
    }
}