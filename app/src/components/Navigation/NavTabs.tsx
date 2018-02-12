import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavTab extends React.Component<{}, {}> {
    render() {
        return <li></li>
    }
}

export class NavTabs extends React.Component<{}, {}> {
    render() {
        return <ul>{this.props.children}</ul>
    }
}