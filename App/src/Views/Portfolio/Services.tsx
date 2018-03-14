import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { RouteComponentProps, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import FirebaseUI from 'firebaseui';
import * as firebase from 'firebase';
import { Transition } from 'react-transition-group';


import { Stores, PortfolioStore } from '../../Stores'

import Auth from '../../Services/Auth'

import { Article, Layer, Section } from '../../Components';
import Carousel, { Slide } from '../../Components/Data/Carousel';

import { Language } from './Local';

type PortfolioProps = PortfolioStore & RouteComponentProps<{}>;



export default class Services extends React.Component<PortfolioProps, {}> {
    static contextTypes = {
        data: PropTypes.object,
        language: PropTypes.number
    };

    render() {
        return (
            <Article padded={false}>
                <Carousel title={Language[this.context.language].Services} base="animated" animation="zoomIn" exit="zoomOut">
                    {this.context.data.services.map((service, index) => {
                        return <Slide key={index} title={service.title} image={`/images/services/service${index+1}.jpg`}>{service.description}</Slide>
                    })}
                </Carousel>
            </Article>
        );
    }
}
