import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Article, Layer, Section } from 'InfiniKit/Components/Structure';
import Carousel, { Slide } from 'InfiniKit/Components/Data/Carousel';

import * as Home1 from '../Images/backgrounds/home1.jpg';
import * as Home2 from '../Images/backgrounds/home2.jpg';
import * as Home3 from '../Images/backgrounds/home3.jpg';
import * as Brand from '../Images/logo.png';

export default class Home extends React.Component<{}, {}> {
    static contextTypes = {
        data: PropTypes.object, 
        language: PropTypes.number
    };

    render() {
        return (
            <Article padded={false}>
                <Carousel controls={false} base="animated" animation="zoomIn" exit="zoomOut">
                    <Slide image={Home1} background="rgba(0, 0, 0, 0.25)"><img src={Brand} /></Slide>
                    <Slide image={Home2} background="rgba(255, 255, 255, 0.25)"><span style={{ margin: 0, lineHeight: 1.5, textAlign: 'center', fontSize: '1.5em', fontWeight: 'bold' }}>{this.context.data.info.more}</span></Slide>
                    <Slide image={Home3} background="rgba(0, 0, 0, 0.25)"><span style={{ margin: 0, color: 'white', lineHeight: 1.5, textAlign: 'center', fontSize: '1.5em', fontWeight: 'bold'  }}>{this.context.data.info.slogan}</span></Slide>
                </Carousel>
            </Article>
        );
    }
}
