import React from 'react';

import Box from './Box';

export default class Centered extends React.Component<{}, {}> {
    render() {
        return (
            <Box justify="center" align="center">{this.props.children}</Box>    
        );
    }
}