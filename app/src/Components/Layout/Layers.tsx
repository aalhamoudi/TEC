import React from "react";
import PropTypes from 'prop-types';

import { Styled, StyledComponent, Style } from "../Styles/Styled";

interface LayersProps {

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

  render() {
    return (
      React.Children.map(this.props.children, (child, index) => {
        let layer = child as any;
        return <InternalLayer key={index} parentIndex={this.context.index || 0} index={index}>{layer.props.children}</InternalLayer>
      })
    );
  }
}

interface LayerProps {

}
export class Layer extends React.Component<LayerProps, {}> {
  render() {
    return this.props.children;
  }
}


interface InternalLayerProps {
  parentIndex: number;
  index: number;
}
@Styled<InternalLayerProps>()
class InternalLayer extends StyledComponent<InternalLayerProps, {}> {
  static style = (theme, props) => ({
    zIndex: parseInt(`${props.parentIndex}${props.index > 9? props.index : `0${props.index}`}`)
  });

  render() {
    return this.props.children || <div></div>;
  }
}
