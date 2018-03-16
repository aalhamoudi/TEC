import React from 'react';
import CSSAnimation from '../Animations/CSSAnimation';


export interface ImageProps {
    src: string;
}
export default class Image extends React.Component<ImageProps, {}> {
    render() {
        return (
            <img src={this.props.src} />
        );
    }
}


export interface AnimatedImageProps {
    src: string;
    shown?: boolean;
    appear?: boolean;
    base?: string;
    animation: string;
    enter?: string;
    exit?: string;

}
export class AnimatedImage extends React.Component<AnimatedImageProps, {}> {
    static defaultProps: Partial<AnimatedImageProps> = {
        shown: true,
        appear: true
    };
    render() {
        return (
            <CSSAnimation lazy unmount shown={this.props.shown} appear={this.props.appear} base={this.props.base} animation={this.props.animation} enter={this.props.enter} exit={this.props.exit}>
                <img src={this.props.src} style={{ position: 'absolute', width: '100%', height: '100%', top: 0, right: 0, bottom: 0, left: 0 }} />
            </CSSAnimation>
        );
    }
}
