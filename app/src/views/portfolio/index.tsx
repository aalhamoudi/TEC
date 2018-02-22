import * as React from 'react';

import { Area, Page } from '../../Components/Structure';
import { ScrollingArea } from '../../Components/Transition/ScrollingArea';
import { NavBarNavigation } from '../../Components/'

import Home from './Home'
import About from './About'
import Services from './Services'
import Work from './Work'

import Theme from './Theme'

export default (props) => (
    <ScrollingArea path='/portfolio' title="Portfolio" nav={NavBarNavigation} theme={Theme} {...props} >
        <Page exact path='/portfolio' title="Home" component={Home} />
        <Page exact path='/portfolio/about' title="About" component={About} />
        <Page exact path='/portfolio/services' title="Services" component={Services} />
        <Page exact path='/portfolio/work' title="Work" component={Work} />
    </ScrollingArea>
);