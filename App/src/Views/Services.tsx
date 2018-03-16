import React from 'react';
import PropTypes from 'prop-types';

import { Article, Layer, Section } from 'infinikit/Components/';
import Carousel, { Slide } from 'infinikit/Components/Data/Carousel';

import { Language } from '../Resources/Local';
import * as Service1 from '../Images/backgrounds/service1.jpg';
import * as Service2 from '../Images/backgrounds/service2.jpg';
import * as Service3 from '../Images/backgrounds/service3.jpg';
import * as Service4 from '../Images/backgrounds/service4.jpg';
import * as Service5 from '../Images/backgrounds/service5.jpg';
const Images = [Service1, Service2, Service3, Service4, Service5]

export default class Services extends React.Component<{}, {}> {
    static contextTypes = {
        data: PropTypes.object,
        language: PropTypes.number
    };

    render() {
        return (
            <Article padded={false}>
                <Carousel title={Language[this.context.language].Services} base="animated" animation="zoomIn" exit="zoomOut">
                    {this.context.data.services.map((service, index) => {
                        return <Slide key={index} title={service.title} image={Images[index]}>{service.description}</Slide>
                    })}
                </Carousel>
            </Article>
        );
    }
}
