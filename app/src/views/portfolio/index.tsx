import * as React from 'react';

import { Area, Page } from '../../Components/Structure';
import { ScrollingArea } from '../../Components/Transition/ScrollingArea';
import { NavbarNavigation } from '../../Components/'

import Home from './Home'
import About from './About'
import Services from './Services'
import Work from './Work'

const theme = {
    navbar: {
        backgroundColor: "white",
        boxShadow: '0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2)'
    },
    navlink: {
        color: "black",
        margin: '20px',
        hoverColor: 'grey',
        active: {
            textDecoration: 'underline'
        }
    }
};


export default (props) => (
    <ScrollingArea path='/portfolio' title="Portfolio" nav={NavbarNavigation} theme={theme} {...props} >
        <Page exact path='/portfolio' title="Home" component={Home} />
        <Page exact path='/portfolio/about' title="About" component={About} />
        <Page exact path='/portfolio/services' title="Services" component={Services} />
        <Page exact path='/portfolio/work' title="Work" component={Work} />
    </ScrollingArea>
);