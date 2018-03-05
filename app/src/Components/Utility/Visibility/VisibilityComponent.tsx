import React from "react";
import ReactDOM from 'react-dom';

import { onVisible, VisibilityOptions } from './isVisible';

interface VisibilityComponentProps {
  callback: () => void;
  ref?: any;
  options?: VisibilityOptions;
}
export default class VisibilityComponent extends React.Component<VisibilityComponentProps, {}> {
  ref;

  componentDidMount() {
    onVisible(this.props.ref || this.ref, this.props.options, this.props.callback);
  }

  render() {
    return (
      this.props.ref? this.props.children : <div ref={ref => this.ref = ref}>{this.props.children}</div>
    );
  }
}
