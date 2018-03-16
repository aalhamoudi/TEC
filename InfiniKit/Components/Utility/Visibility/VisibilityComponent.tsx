import React from "react";
import ReactDOM from 'react-dom';

import { Visibility, VisibilityOptions } from './Visibility';

export interface VisibilityComponentProps {
    onVisible: () => void;
    onHidden?: () => void;
  element?: any;
  options?: VisibilityOptions;
}
export default class VisibilityComponent extends React.Component<VisibilityComponentProps, {}> {
  ref;

  componentDidMount() {
      Visibility(this.props.element || this.ref, this.props.options, this.onVisible.bind(this), this.onHidden.bind(this));
  }
  onVisible() {
      this.props.onVisible();
  }

  onHidden() {
      if (this.props.onHidden)
          this.props.onHidden()
  }
  render() {
    return (
        this.props.element? this.props.children : <div ref={ref => this.ref = ref}>{this.props.children}</div>
    );
  }
}
