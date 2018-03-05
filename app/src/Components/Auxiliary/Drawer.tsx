import React from "react";

import { Styled, StyledComponent, Style } from "../Styles/Styled";

interface DrawerProps {

}
@Styled<DrawerProps>('aside')
export default class Drawer extends StyledComponent<DrawerProps, {}> {
  static style = (theme, props) => ({
    boxShadow: "0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)"
  });

  render() {
    return (
      this.props.children
    );
  }
}

interface StickyDrawerProps {

}
@Styled<StickyDrawerProps>()
export class StickyDrawer extends StyledComponent<StickyDrawerProps, {}> {
  static style = (theme, props) => ({

  });

  render() {
    return (
      this.props.children
    );
  }
}

interface CollapsibleDrawerProps {
  collapsed: boolean;
}
@Styled<CollapsibleDrawerProps>()
export class CollapsibleDrawer extends StyledComponent<CollapsibleDrawerProps, {}> {
  static style = (theme, props) => ({

  });

  render() {
    return (
      this.props.children
    );
  }
}

interface ModalDrawerProps {

}
@Styled<ModalDrawerProps>()
export class ModalDrawer extends StyledComponent<ModalDrawerProps, {}> {
  static style = (theme, props) => ({

  });

  render() {
    return (
      this.props.children
    );
  }
}
