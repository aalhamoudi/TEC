import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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

import { NavBar, NavSection } from '../../../Components/NavBar';

class Layout extends React.Component<{}, {}> {
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
                <NavBar 
                    header={<NavSection link="/" icon={AccountCircle} />}
                    footer={<NavSection link="/" icon={SettingsIcon} />}>
                    <NavSection link="/" icon={AccountCircle} />
                </NavBar>
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

export default () => (
    <Switch>
        <Route exact path='/dashboard' component={Home} />
        <Route path='/dashboard/projects/'>
            <Layout>
                <Route path='/dashboard/projects/:id' component={Overview} />            
            </Layout>
        </Route>
    </Switch>
);