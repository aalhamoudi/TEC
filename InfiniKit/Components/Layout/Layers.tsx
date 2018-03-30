import React from "react";
import PropTypes from 'prop-types';

import { Styled, StyledComponent, Style } from "../Styles/Styled";

export interface LayersProps {
    id?: string;
    style?: any;
}
export default class Layers extends React.Component<LayersProps, {}> {
  static childContextTypes = {
      index: PropTypes.number
  }
  static contextTypes = {
    index: PropTypes.number
  };
  getChildContext() {
      return {index: this.context.index? this.context.index + 1 : 1};
  }

  style = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' };

  render() {
      let style = this.props.style ? { ...this.style, ...this.props.style } : this.style;
      return (
          <div id={this.props.id || ""} style={style}>
              {React.Children.map(this.props.children, (child, index) => {
                  let layer = child as any;
                  return <InternalLayer key={index} parentIndex={this.context.index || 0} index={index} center={layer.props.center}
                      fill={!(layer.props.top || layer.props.right || layer.props.bottom || layer.props.left)}
                      top={layer.props.top} right={layer.props.right} bottom={layer.props.bottom} left={layer.props.left}>
                      {layer.props.children}
                  </InternalLayer>
              })}
          </div>
    );
  }
}

export interface LayerProps {
    center?: boolean;
    top?: number | 'initial' | 'inherit' | 'unset';
    right?: number | 'initial' | 'inherit' | 'unset';
    bottom?: number | 'initial' | 'inherit' | 'unset';
    left?: number | 'initial' | 'inherit' | 'unset';
}
export class Layer extends React.Component<LayerProps, {}> {
    static defaultProps: Partial<LayerProps> = {
        center: true
    };
  render() {
    return this.props.children;
  }
}


export interface InternalLayerProps extends LayerProps {
  parentIndex: number;
  index: number;
  fill?: boolean;

}
@Styled<InternalLayerProps>()
class InternalLayer extends StyledComponent<InternalLayerProps, {}> {
  static style = (theme, props) => ({
      zIndex: parseInt(`${props.parentIndex}${props.index > 9 ? props.index : `0${props.index}`}`),
      display: 'flex',
      justifyContent: props.center ? 'center' : 'initial',
      alignItems: props.center ? 'center' : 'initial',
      position: 'absolute',
      top: props.fill? 0 : props.top,
      right: props.fill ? 0 : props.right,
      bottom: props.fill ? 0 : props.bottom,
      left: props.fill ? 0 : props.left
  });

  render() {
    return this.props.children || <div></div>;
  }
}
