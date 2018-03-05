import React from 'react';

import Box from '../Layout/Box';
import { Styled } from '../Styles/Styled';

import CloseIcon from 'material-ui-icons/Close'; 
import PlayIcon from 'material-ui-icons/PlayArrow';
import NextIcon from 'material-ui-icons/NavigateNext';
import PrevIcon from 'material-ui-icons/NavigateBefore'; 
import IndicatorIcon from 'material-ui-icons/Remove'; 

interface CarouselProps {
    images: string[]
    close?: () => void;
}
export default class Carousel extends React.Component<CarouselProps, {currentImage: number}> {
    constructor(props, context?) {
        super(props, context);
        this.state = {
            currentImage: 0
        };
    }

    render() {
        let iconStyle = {
            color: 'white',
            width: 36,
            height: 36,
            margin: 10,
            cursor: 'pointer'
        };
        let indicatorStyle = Object.assign({}, iconStyle, { margin: 0, color: '#9e9e9e' });
        return (
            <div style={{ backgroundImage: `url("${this.props.images[this.state.currentImage]}")`, backgroundSize: 'cover', display: "flex", minWidth: 800, minHeight: 600 }}>
                <Box direction="column" justify="space-between" fill="width">
                    <CloseIcon style={Object.assign({}, iconStyle, { alignSelf: 'flex-end' })} onClick={() => this.props.close()} />
                    <Box justify="space-between" align="stretch">
                        <PrevIcon style={iconStyle} />
                        <PlayIcon style={iconStyle} />
                        <NextIcon style={iconStyle} />
                    </Box>
                    <Box justify="center">
                        {this.props.images.map((image, index) => {
                            return index === this.state.currentImage ? <IndicatorIcon key={index} style={Object.assign({}, indicatorStyle, { color: 'white' })} /> : <IndicatorIcon key={index} style={indicatorStyle} />
                        })}
                    </Box>
                </Box>
            </div>
        );
    }
}