import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Article, Layer, Section } from 'infinikit/Components';
import Box from 'infinikit/Components/Layout/Box';
import Carousel, { Slide } from 'infinikit/Components/Data/Carousel';

import * as Home1 from '../Images/backgrounds/home1.jpg';
import * as Home2 from '../Images/backgrounds/home2.jpg';
import * as Home3 from '../Images/backgrounds/home3.jpg';
import * as Brand from '../Images/brand.png';

export default class Home extends React.Component<{}, {}> {
    static contextTypes = {
        data: PropTypes.object, 
        language: PropTypes.number
    };

    render() {
        return (
            <Article padded={false}>
                <Carousel controls={false} base="animated" animation="zoomIn" exit="zoomOut">
                    <Slide image={Home1} frame={false}><img src={Brand} /></Slide>
                    <Slide image={Home2}><h2 style={{ margin: 0, lineHeight: 1.5, textAlign: 'center' }}>{this.context.data.info.more}</h2></Slide>
                    <Slide image={Home3} background="black"><h2 style={{ margin: 0, color: 'white', lineHeight: 1.5, textAlign: 'center' }}>{this.context.data.info.slogan}</h2></Slide>
                </Carousel>
            </Article>
        );
    }
}
