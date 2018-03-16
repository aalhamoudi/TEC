import React from 'react';

import Box from '../Layout/Box';

export interface CopyrightProps {
    name: string;
    developer?: string;
    url?: string;
}
export default class Copyright extends React.Component<CopyrightProps, {}> {
    render() {
        return (
            <Box justify='center' align='center' margin="0 20px">
                <span>&copy; 2018 <span style={{ fontWeight: 'bold' }}>{this.props.name}</span> All Rights Reserved.&nbsp;</span>
                <span>Developed by <a href={this.props.url} style={{ fontWeight: 'bold' }}>{this.props.developer}</a>.</span>
                </Box>
        );
    }
}
