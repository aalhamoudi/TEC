import * as React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react'
import { Route, RouteComponentProps } from 'react-router-dom';


import { Area, Page } from 'InfiniKit/Components/Structure';
import { ScrollingArea } from 'InfiniKit/Components/Transition/ScrollingArea';
import { NavBarNavigation } from 'InfiniKit/Components/Navigation/NavBar';

import HomeIcon from 'material-ui-icons/Home';
import ServicesIcon from 'material-ui-icons/FolderOpen';
import PressIcon from 'material-ui-icons/CameraAlt';
import MediaIcon from 'material-ui-icons/Photo';
import AboutIcon from 'material-ui-icons/Group';
import ContactIcon from 'material-ui-icons/Email';
import WorkIcon from 'material-ui-icons/Work';

import Home from './Home'
import About from './About'
import Services from './Services'
import Work from './Work'

import Theme from '../Resources/Theme'

import { Stores, PortfolioStore } from '../Stores'

type PortfolioProps = PortfolioStore;

import { Language } from '../Resources/Local';

import * as Brand from '../Images/brand.png';


//@inject((stores: Stores) => stores.portfolioStore)
//@observer
export default class Portfolio extends React.Component<PortfolioProps, {}> {
    static contextTypes = {
        data: PropTypes.object
    };
    static childContextTypes = {
        rtl: PropTypes.bool,
        language: PropTypes.number
    };
    static defaultProps = {
        language: 0,
        rtl: true
    };
    getChildContext() {
        return { rtl: this.props.language === 0 ? true : false, language: this.props.language }
    }

    render() {
        document.title = this.context.data.info.name;
        return (
            <ScrollingArea path='/' title="Portfolio" nav={NavBarNavigation} brand={Brand} theme={Theme} {...this.props} >
                <Page exact path='/' title={Language[this.props.language].Pages[0]} icon={HomeIcon} component={Home} />
                <Page exact path='/about' title={Language[this.props.language].Pages[1]} icon={AboutIcon} component={About} />
                <Page exact path='/services' title={Language[this.props.language].Pages[2]} icon={ServicesIcon} component={Services} />
                <Page exact path='/work' title={Language[this.props.language].Pages[3]} icon={WorkIcon} component={Work} />
            </ScrollingArea>
        );

    }
}