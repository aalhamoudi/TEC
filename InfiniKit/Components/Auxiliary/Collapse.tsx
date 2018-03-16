import React from "react";

import { Styled, StyledComponent, Style } from "../Styles/Styled";

export interface CollapseProps {
  collapsed: boolean;
  collapsedDimension?: number;
  variant?: 'Horizontal' | 'Vertical'
}
@Styled<CollapseProps>()
export default class Collapse extends StyledComponent<CollapseProps, {}> {
  static style = (theme, props) => ({
    width: props.variant === 'Horizontal'? (props.collapsed? props.collapsedDimension : 'auto') : 'auto',
    height: props.variant === 'Vertical'? (props.collapsed? props.collapsedDimension : 'auto') : 'auto'
  });

  static defaultProps: Partial<CollapseProps> = {
    collapsed: false,
    collapsedDimension: 0,
    variant: 'Vertical'
  }

  render() {
    return this.props.children;
  }
}
