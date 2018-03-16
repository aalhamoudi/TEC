import React from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group'

import { Styled, Style, StyledComponent } from '../Styles/Styled';
import VisibilityComponent from '../Utility/Visibility/VisibilityComponent';
import { VisibilityOptions } from '../Utility/Visibility/Visibility';
import { AnimationKeyFrame, AnimationSequence, AnimationEffectTiming, KeyframeEffect, Animation, Document } from './WebAnimations';


export type Effect = AnimationKeyFrame | AnimationKeyFrame[] | AnimationSequence;

export interface AnimationProps {
    scroll?: boolean;
    slide?: boolean;
    repeat?: boolean;
    options?: VisibilityOptions,
  effect?: Effect;
  timing?: AnimationEffectTiming | number;
  enterEffect?: Effect;
  enterTiming?: AnimationEffectTiming | number;
  exitEffect?: Effect;
  exitTiming?: AnimationEffectTiming | number;
}
export default class Animated extends React.Component<AnimationProps, {visible: boolean}> {
    ref;

    static defaultProps: Partial<AnimationProps> = {
        timing: 1000
    }

  enterAnimation?;
  exitAnimation?;

  constructor(props, context?) {
      super(props, context);
      this.state = {
          visible: this.props.scroll? false : true
      };
  }

  componentDidMount() {
      if (this.props.scroll)
          this.ref.style.visibility = "hidden";
  }

  onEnter() { }

  onEntering() {
      if (!this.enterAnimation) {
          let effect = new KeyframeEffect(this.ref, this.props.enterEffect ? this.props.enterEffect : this.props.effect, this.props.enterTiming ? this.props.enterTiming : this.props.timing);
          this.enterAnimation = new Animation(effect, (document as any).timeline);
      }
      this.enterAnimation.play();
  }

  onEntered() { }

  onExit() { }

  onExiting() {
      if (!this.exitAnimation) {
          let effect = new KeyframeEffect(this.ref, this.props.exitEffect ? this.props.exitEffect : this.props.effect, this.props.exitTiming ? this.props.exitTiming : this.props.timing);
          this.exitAnimation = new Animation(effect, (document as any).timeline);
          this.exitAnimation.onfinish = () => this.ref.style.visibility = "hidden";
          this.exitAnimation.reverse();
      }
      this.exitAnimation.play();
  }

  onExited() { }

  onVisible() {
      this.ref.style.visibility = "visible";

      if (!this.enterAnimation)
          this.setState({visible: true})
      else if (this.props.repeat)
          this.setState({ visible: true })

  }

  onHidden() {
      if (this.props.repeat)
        this.setState({ visible: false });
  }

  render() {
      return (
          <Transition ref={ref => this.ref = ReactDOM.findDOMNode(ref)} in={this.state.visible} appear={true} timeout={1000}
              onEnter={this.onEnter.bind(this)}
              onEntering={this.onEntering.bind(this)}
              onEntered={this.onEntered.bind(this)}
              onExit={this.onExit.bind(this)}
              onExiting={this.onExiting.bind(this)}
              onExited={this.onExited.bind(this)}
          >
              {state => { return this.props.scroll ? <VisibilityComponent options={this.props.options} onVisible={this.onVisible.bind(this)} onHidden={this.onHidden.bind(this)}>{this.props.children}</VisibilityComponent> : this.props.children }}
          </Transition>
    );
  }
}
