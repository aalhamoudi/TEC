import React from 'react';
import { CSSTransition } from 'react-transition-group';


interface AnimteProps {
    animation: string;
}
export default class Animate extends React.Component<AnimteProps, {}> {
    render() {
        return (
            <div className={`animated ${this.props.animation}`}>{this.props.children}</div>
        );
    }
}
