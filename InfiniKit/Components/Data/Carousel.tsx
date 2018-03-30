import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Layout/Box';
import Layers, { Layer } from '../Layout/Layers';
import { Styled } from '../Styles/Styled';
import Animate from '../Animations/Animate';
import CSSAnimation from '../Animations/CSSAnimation';
import { AnimatedImage } from '../Media/Image';

import CloseIcon from 'material-ui-icons/Close'; 
import PlayIcon from 'material-ui-icons/PlayArrow';
import PauseIcon from 'material-ui-icons/Pause';
import NextIcon from 'material-ui-icons/NavigateNext';
import PrevIcon from 'material-ui-icons/NavigateBefore'; 
import IndicatorIcon from 'material-ui-icons/Remove'; 

interface CarouselProps {
    title?: string;
    autoplay?: boolean;
    controls?: boolean;
    delay?: number;
    base?: string;
    animation?: string;
    enter?: string;
    exit?: string;
}
export default class Carousel extends React.Component<CarouselProps, {currentSlide: number, playing: boolean}> {
    constructor(props, context?) {
        super(props, context);
        this.state = {
            currentSlide: 0,
            playing: props.autoplay
        };
    }
    interval;

    static defaultProps = {
        autoplay: true,
        controls: true,
        delay: 3000
    };

    static contextTypes = {
        rtl: PropTypes.bool
    };

    componentDidMount() {
        if (this.state.playing) {
            this.interval = setInterval(this.next.bind(this), this.props.delay);
        }
    }

    componentWillUnmount() {
        if (this.interval)
            clearInterval(this.interval);
    }

    componentWillUpdate() {
        if (this.interval)
            clearInterval(this.interval);
        
    }

    componentDidUpdate() {
        if (this.state.playing)
            this.interval = setInterval(this.next.bind(this), this.props.delay)
    }

    previous() {
        this.setState({ currentSlide: this.state.currentSlide === 0 ? (React.Children.count(this.props.children) - 1) : (this.state.currentSlide - 1) });
    }

    next() {
        this.setState({ currentSlide: ((this.state.currentSlide + 1) % React.Children.count(this.props.children)) })
    }

    goTo(slide) {
        this.setState({ currentSlide: slide, playing: false })
    }

    togglePlay() {
        this.setState({ playing: !this.state.playing })
    }

    render() {
        let iconStyle = {
            color: 'white',
            width: 60,
            height: 60,
            margin: 0,
            cursor: 'pointer',
            transform: this.context.rtl && 'rotate(180deg)'
        };
        let indicatorStyle = Object.assign({}, iconStyle, { margin: '-10px 0', color: '#9e9e9e' });
        return (
            <Layers style={{ backgroundColor: 'black' }}>
                <Layer>
                    {React.Children.map(this.props.children, (child, index) => {
                        let slide = child as any;
                        return <Slide key={index} shown={index === this.state.currentSlide} title={slide.props.title} image={slide.props.image} frame={slide.props.frame} background={slide.props.background}
                            base={this.props.base} animation={this.props.animation} enter={this.props.enter} exit={this.props.exit}>
                            {slide.props.children}
                        </Slide>
                    })}
                </Layer>
                <Layer top={0} right={0} bottom={0} left={0}>
                    <Box direction="column" fill="both">
                        {this.props.title && <Box fill="width" justify="center" background="rgba(0, 0, 0, 0.5)" position="absolute" top="5%"><h1 style={{ color: 'white', margin: 15 }}>{this.props.title}</h1></Box>}
                        <Box direction="column" justify="flex-end" fill="width" position="absolute" bottom={0}>
                            {this.props.controls &&
                                <Box justify="space-between" align="stretch">
                                    <PrevIcon style={iconStyle} onClick={this.previous.bind(this)} />
                                    {this.state.playing ? <PauseIcon style={iconStyle} onClick={this.togglePlay.bind(this)} /> : <PlayIcon style={iconStyle} onClick={this.togglePlay.bind(this)} />}
                                    <NextIcon style={iconStyle} onClick={this.next.bind(this)} />
                                </Box>
                            }
                            <Box justify="center">
                                {React.Children.map(this.props.children, (image, index) => {
                                    return index === this.state.currentSlide ? <IndicatorIcon key={index} style={Object.assign({}, indicatorStyle, { color: 'white' })} /> : <IndicatorIcon key={index} style={indicatorStyle} onClick={() => this.goTo.bind(this)(index)} />
                                })}
                            </Box>
                        </Box>
                    </Box>
                </Layer>
            </Layers>
        );
    }
}


interface SlideProps {
    image: string;
    title?: string;
    shown?: boolean;
    frame?: boolean;
    background?: string;
    base?: string;
    appear?: boolean;
    animation?: string;
    enter?: string;
    exit?: string;
}
export class Slide extends React.Component<SlideProps, {}> {
    static defaultProps: Partial<SlideProps> = {
        shown: true,
        appear: false,
        frame: true
    };
    render() {
        return (
            <Layers>
                <Layer>
                    <AnimatedImage src={this.props.image} shown={this.props.shown} appear={this.props.appear}
                        base={this.props.base} animation={this.props.animation} enter={this.props.enter} exit={this.props.exit} />
                </Layer>
                <Layer>
                    <CSSAnimation lazy unmount shown={this.props.shown} appear={this.props.appear}
                        base={this.props.base} animation={this.props.animation} enter={this.props.enter} exit={this.props.exit}>
                        <div style={{ color: 'black', fontSize: '1.5em', backgroundColor: (this.props.frame && (this.props.background || 'rgba(255, 255, 255, 0.25)')), padding: 20, maxWidth: screen.width > 768 ? "50%" : "80%" }}>
                            {this.props.title && <h3>{this.props.title}</h3>}
                            <p style={{ display: 'flex', justifyContent: 'center', margin: 0 }}>{this.props.children}</p>
                        </div>
                    </CSSAnimation>
                </Layer>
            </Layers>
        );
    }
}
