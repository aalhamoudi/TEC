import React from 'react';

import Box from '../Layout/Box';

interface CopyrightProps {
    name: string;
    developer?: string;
}
export default class Copyright extends React.Component<CopyrightProps, {}> {
    render() {
        return (
            <Box justify='center' align='center' margin="0 20px">&copy; 2018 {this.props.name} All Rights Reserved. Developed by {this.props.developer}.</Box>
        );
    }
}
