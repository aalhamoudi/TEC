import React from 'react';

import Box from '../Layout/Box';
import Icon from '../Controls/Icon';

export interface SocialProps {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string
}

export default class Social extends React.Component<SocialProps, {}> {
    render() {
        return (
            <Box padding={10}>
                {Object.keys(this.props).map((key, index) => {
                    return <a key={index} href={`http://www.${key}.com/${this.props[key]}`}><Icon icon={`${key}`} /></a>
                })}
            </Box>
        );
    }
}
