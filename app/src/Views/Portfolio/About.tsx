import * as React from 'react';
import PropTypes from 'prop-types';
import { RouteComponentProps, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import FirebaseUI from 'firebaseui';
import * as firebase from 'firebase';
import Hammer from 'react-hammerjs';

import { Stores, PortfolioStore } from '../../Stores'

import Auth from '../../Services/Auth'

import { Article } from '../../Components';

import AboutWidget from '../../Components/Widgets/AboutWidget';

type PortfolioProps = PortfolioStore & RouteComponentProps<{}>;


import { Language } from './Local';


export default class About extends React.Component<{}, {}> {
    static contextTypes = {
        data: PropTypes.object,
        language: PropTypes.number
    };
    componentWillMount() {
    }
    public render() {
        return (
            <Article>
                <AboutWidget title={Language[this.context.language].AboutUs} image={this.context.data.branding.about} background="/images/backgrounds/about.jpg">
                    {this.context.data.about}
                </AboutWidget>
            </Article>
        )
    }
}

