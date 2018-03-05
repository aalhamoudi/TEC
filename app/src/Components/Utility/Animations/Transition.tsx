import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'
//import { KeyframeEffect, AnimationEffectTiming } from 'web-animations-js';

import { Styled, Style, StyledComponent } from '../../Styles/Styled';
import VisibilityComponent from '../Visibility/VisibilityComponent';

interface TransitionProps {
  tag?: string | React.ReactType;
  effect: KeyframeEffect;
  timing?: AnimationEffectTiming | number;
  enterEffect?: KeyframeEffect;
  enterTiming?: AnimationEffectTiming | number;
  leaveEffect?: KeyframeEffect;
  leaveTiming?: AnimationEffectTiming | number;
}
@Styled<TransitionProps>()
export default class Transition extends React.Component<TransitionProps, {}> {
  ref?;

  render() {
    return (
        <ReactTransitionGroup ref={ref => this.ref = ref} component={this.props.tag || 'div'}>
            <Animation ref={this.ref} {...this.props}>{this.props.children}</Animation>
        </ReactTransitionGroup>
    );
  }
}

interface AnimationProps {
  ref: any;
  scroll?: boolean;
  effect: KeyframeEffect;
  timing?: AnimationEffectTiming | number;
  enterEffect?: KeyframeEffect;
  enterTiming?: AnimationEffectTiming | number;
  leaveEffect?: KeyframeEffect;
  leaveTiming?: AnimationEffectTiming | number;
}
@Styled<AnimationProps>()
export class Animation extends React.Component<AnimationProps, {}> {
  apprarAnimation?;
  enterAnimation?;
  leaveAnimation?;

  componentWillAppear?() {
    if (!this.props.scroll)
      this.apprarAnimation = this.props.ref.animate(this.props.effect, this.props.timing || 1000);
  }

  componentWillEnter?() {
      this.enterAnimation = this.props.enterEffect? this.props.ref.animate(this.props.enterEffect, this.props.enterTiming || 1000) : this.props.ref.animate(this.props.effect, this.props.timing || 1000);
  }

  componentWillLeave?() {
      this.leaveAnimation = this.props.leaveEffect? this.props.ref.animate(this.props.leaveEffect, this.props.leaveTiming || 1000) :
        this.props.ref.animate(this.props.effect, Object.assign({}, this.props.timing? (typeof this.props.timing === 'number'? {duration: this.props.timing} : this.props.timing) : {duration: 1000}, {direction: 'reverse'}));
  }

  onVisible?() {
    this.apprarAnimation = this.props.ref.animate(this.props.effect, this.props.timing || 1000);
  }

  render() {
    return (
        this.props.scroll? <VisibilityComponent ref={this.props.ref} callback={this.onVisible}>{this.props.children}</VisibilityComponent> : this.props.children
    );
  }
}
