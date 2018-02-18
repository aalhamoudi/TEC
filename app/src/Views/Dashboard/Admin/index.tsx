import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Area, Page } from '../../../Components/Structure';

import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';


import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';

import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import SettingsIcon from 'material-ui-icons/Settings';

import Home from './Home'
import Overview from './Overview'

import { IconNavigation, IconBar, NavSection } from '../../../Components';

const theme = {};

export default (props) => (
    <Page path="/dashboard" title="dashboard">
        <Switch>
            <Page exact path='/dashboard' title="Dashboard" component={Home} />
            <Area path='/dashboard/projects/:id' title="Projects" nav={IconNavigation} theme={theme}>
                <Page path='/dashboard/projects/:id/' title="Overview" icon={AccountCircle} component={Overview} />   
            </Area>
        </Switch>
    </Page>
);