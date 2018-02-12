import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MediaQuery, Responsive } from 'react-responsive'

export class NavGroup extends React.Component<{ fill?: boolean }, {}> {
    render() {
        return this.props.fill ? <ul className="nav" style={{ flexGrow: 1 }}> {this.props.children}</ul> : <ul className="nav"> {this.props.children}</ul>
    }
}

export class NavSection extends React.Component<{link: string, icon: string, title?: string}, {}> {
    render() {
        return <li>
              <NavLink exact to={this.props.link} activeClassName='active' activeStyle={{backgroundColor: '#18191c'}}>
                <span className={`fa fa-${this.props.icon} fa-3x`} style={{ color: "white", margin: "0px 0px" }}></span>
                {this.props.title && <h6 style={{ fontWeight: 'bold', color: 'white' }}>{this.props.title}</h6>}
               </NavLink>
              </li>
    }
}

export class NavModal extends React.Component<{}, {}> {
    render() {
        return <li>
            <hr style={{ width: 69, margin: 0 }} />
        </li>
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
        return <NavGroup>
                    {this.props.children}
                    <NavSeparator />
        </NavGroup>
    }
}

export class NavContent extends React.Component<{}, {}> {
    render() {
        return <NavGroup fill={true}>
            {this.props.children}
        </NavGroup>
    }
}


export class NavFooter extends React.Component<{}, {}> {
    render() {
        return <NavGroup>
            <NavSeparator />
            {this.props.children}
        </NavGroup>
    }
}

export class NavBar extends React.Component<{width: number}, {}> {
    public render() {
        let navStyle = {
            position: 'fixed' as 'fixed',
            width: this.props.width,
            height: '100vh',
            float: 'left',
            top: 0,
            background: "linear-gradient(180deg, #202226, #18191c)",
            display: 'flex',
            flexDirection: 'column' as 'column'
        };
        return <div style={navStyle}>
            <NavHeader>
                <NavSection link="/" icon="home" />
                </NavHeader>
            <NavContent>
                <NavSection link="/ajax/reactjs" icon="book" title="React" />
                <NavSection link="/websocket" icon="bug" title="WebSockets" />
            </NavContent>
            <NavFooter>
                <NavSection link="/settings" icon="cogs" />
            </NavFooter>
            </div>;
    }
}
