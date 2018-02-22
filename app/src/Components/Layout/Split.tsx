import React from 'react';

import { Styled, StyledComponent, Style } from '../Styles';
import Box, { BoxItem } from './Box';

export default class Split extends StyledComponent<{priority?: string}, {}> {
    render() {
        let priority = this.props.priority || "both";
        let rightGrow = priority == "both" || priority == "right"? 1 : 0;
        let leftGrow = priority == "both" || priority == "left"? 1 : 0;
        
        return (
            <Box>
                <BoxItem grow={rightGrow}>{this.props.children[0]}</BoxItem>
                <BoxItem grow={leftGrow}>{this.props.children[1]}</BoxItem>
            </Box>
        );
    }
}

