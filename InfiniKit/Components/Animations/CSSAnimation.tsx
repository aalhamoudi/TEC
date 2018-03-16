import React from 'react';
import { CSSTransition } from 'react-transition-group';


export interface CSSAnimationProps {
    shown?: boolean;
    base?: string;
    appear?: boolean;
    animation: string;
    enter?: string;
    exit?: string;
    lazy?: boolean;
    unmount?: boolean;
}
export default class CSSAnimation extends React.Component<CSSAnimationProps, {}> {
    static defaultProps: Partial<CSSAnimationProps> = {
        shown: true,
        appear: true
    };

    animation(animation) {
        return this.props.base? `${this.props.base} ${animation}` : animation;
    }
    render() {
        let appear = this.props.appear && this.animation(this.props.animation);
        let enter = this.props.enter ? this.animation(this.props.enter) : this.animation(this.props.animation);
        let exit = this.animation(this.props.exit);
        return (
            <CSSTransition in={this.props.shown} appear mountOnEnter={this.props.lazy} unmountOnExit={this.props.unmount} classNames={{ appearActive: appear, enterActive: enter, exitActive: exit }} timeout={1000}>
                {this.props.children}
            </CSSTransition>
        );
    }
}
