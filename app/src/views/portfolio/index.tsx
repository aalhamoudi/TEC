import * as React from 'react';

import { Area, Page } from '../../Components/Structure';
import { ScrollingArea } from '../../Components/Transition/ScrollingArea';
import { NavBarNavigation } from '../../Components/';

import HomeIcon from 'material-ui-icons/Home';
import ProjectsIcon from 'material-ui-icons/Folder';
import PressIcon from 'material-ui-icons/CameraAlt';
import MediaIcon from 'material-ui-icons/Photo';
import AboutIcon from 'material-ui-icons/Group';
import ContactIcon from 'material-ui-icons/Email';

import * as navHeaderBg from "../../Images/crescent-drive.jpg";
import * as navBrandImg from "../../Images/navbrand.png";

import Home from './Home'
import Projects from './Projects'
import Press from './Press'
import Media from './Media'
import About from './About'
import Contact from './Contact'

import Theme from './Theme'

export default (props) => (
    <Area path='/portfolio' title="Portfolio" nav={NavBarNavigation} header={navHeaderBg} brand={navBrandImg} theme={Theme} {...props} >
        <Page exact path='/portfolio' title="Home" icon={HomeIcon} component={Home} />
        <Page exact path='/portfolio/projects' title="Projects" icon={ProjectsIcon} component={Projects} />
        <Page exact path='/portfolio/press' title="Press" icon={PressIcon} component={Press} />
        <Page exact path='/portfolio/media' title="Media" icon={MediaIcon} component={Media} />
        <Page exact path='/portfolio/about' title="About" icon={AboutIcon} component={About} />
        <Page exact path='/portfolio/contact' title="Contact" icon={ContactIcon} component={Contact} />
    </Area>
);
