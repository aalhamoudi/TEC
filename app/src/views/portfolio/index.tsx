import * as React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react'
import { Route, RouteComponentProps } from 'react-router-dom';


import { Area, Page } from '../../Components/Structure';
import { PresentationArea, Header, Content, Footer } from '../../Components/Transition/PresentationArea';
import { ScrollingArea } from '../../Components/Transition/ScrollingArea';
import { NavBarNavigation } from '../../Components/';

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

import Theme from './Theme'

import { Stores, PortfolioStore } from '../../Stores'

type PortfolioProps = PortfolioStore;

import { Language } from './Local';

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
            <ScrollingArea path='/portfolio' title="Portfolio" nav={NavBarNavigation} brand={this.context.data.branding.brand} theme={Theme} {...this.props} >
                <Page exact path='/portfolio' title={Language[this.props.language].Pages[0]} icon={HomeIcon} component={Home} />
                <Page exact path='/portfolio/about' title={Language[this.props.language].Pages[1]} icon={AboutIcon} component={About} />
                <Page exact path='/portfolio/services' title={Language[this.props.language].Pages[2]} icon={ServicesIcon} component={Services} />
                <Page exact path='/portfolio/work' title={Language[this.props.language].Pages[3]} icon={WorkIcon} component={Work} />
            </ScrollingArea>
        );

    }
}