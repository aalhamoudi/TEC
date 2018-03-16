import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Layout/Box';
import { Default, Mobile } from '../Utility/Responsive/Presets/Device';


export interface AboutWidgetProps {
    title?: string;
    image?: string;
    background?: string;
}
export default class AboutWidget extends React.Component<AboutWidgetProps, {}> {
    render() {
        return (
            <Box fill="both" justify="flex-start" padding={20} align="center" image={this.props.background} direction={screen.width > 768 ? 'row' : 'column'}>
                <Box direction='column' background="white" padding={10} opacity={0.8}>
                    <h1 style={{margin: 15}}>{this.props.title}</h1>
                    <div style={{maxWidth: 250}}>{this.props.children}</div>
                </Box>
                <Default>
                    <img src={this.props.image} style={{ width: 100, height: 100, margin: 10, position: 'absolute', top: 50, left: 50 }} />
                </Default>
            </Box>
        );
    }
}
