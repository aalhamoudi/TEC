import React from 'react';
import ReactDOM from 'react-dom';
import { RouteComponentProps, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import FirebaseUI from 'firebaseui';
import * as firebase from 'firebase';

import { Stores, PortfolioStore } from '../../Stores'

import Auth from '../../Services/Auth'

import { Article, Layer, Section } from '../../Components';
import Box from '../../Components/Layout/Box';
import Carousel, { Slide } from '../../Components/Data/Carousel';

type PortfolioProps = PortfolioStore & RouteComponentProps<{}>;



export default class Home extends React.Component<PortfolioProps, {}> {
    render() {
        return (
            <Article padded={false}>
                <Carousel controls={false} base="animated" animation="zoomIn" exit="zoomOut">
                    <Slide image="/images/backgrounds/home.jpg" frame={false}><img src="/images/brand.png" /></Slide>
                    <Slide image="/images/backgrounds/home.jpg" frame={false}></Slide>
                    <Slide image="/images/backgrounds/home.jpg" frame={false}></Slide>
                </Carousel>
            </Article>
        );
    }
}
