import React from "react";
import ReactDOM from 'react-dom';

type ElementFunction = () => Element;
type InstanceFunction = () => React.ReactInstance;
export type PortalComponent = Element | React.ReactInstance | ElementFunction | InstanceFunction;

interface PortalProps {
  container?: PortalComponent,
  onRendered?: () => void;
}
export default class Portal extends React.Component<PortalProps, {container: Element}> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      container: null
    };
  }

  setContainer(container) {
    container = typeof container === 'function' ? container() : container;
    if (container)
      this.setState({container: ReactDOM.findDOMNode(container)});
    else this.setState({container: ReactDOM.findDOMNode(document.body)});

  }

  getContainer(): Element {
    return this.state.container;
  }

  componentWillMount() {
    this.setContainer(this.props.container);
  }

  componentDidMount() {
    if (!this.state.container)
      this.setContainer(this.props.container);
    else if (this.props.onRendered)
      this.props.onRendered();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.component !== this.props.container) {
      this.setContainer(nextProps.component)
    }
  }

  componentWillUnmount() {
      this.setState({container: null});
  }

  render() {
    return this.props.children? ReactDOM.createPortal(this.props.children, this.state.container) : null;

  }
}
