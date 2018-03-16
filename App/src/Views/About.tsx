import * as React from 'react';
import PropTypes from 'prop-types';

import { Article } from 'infinikit/Components/';
import AboutWidget from 'infinikit/Components//Widgets/AboutWidget';

import { Language } from '../Resources/Local';
import * as AboutBg from '../Images/backgrounds/about.jpg';
import * as AboutLogo from '../Images/about.png';

export default class About extends React.Component<{}, {}> {
    static contextTypes = {
        data: PropTypes.object,
        language: PropTypes.number
    };

    public render() {
        return (
            <Article>
                <AboutWidget title={Language[this.context.language].AboutUs} image={AboutLogo} background={AboutBg}>
                    {this.context.data.about}
                </AboutWidget>
            </Article>
        )
    }
}

