import React from "react";
import ReactDOM from 'react-dom';

import Portal, { PortalComponent } from './Portal';
import Box from "../Layout/Box";
import Typography from "../Content/Typography";
import { Styled, StyledComponent, Style } from "../Styles/Styled";

interface ModalProps {
    shown: boolean;
    toggle?: () => void;
    title?: string;
  container?: PortalComponent;
  backdrop?: boolean;
  offsetTop?: number;
  offsetRight?: number;
  offsetBottom?: number;
  offsetLeft?: number;
}
export default class Modal extends React.Component<ModalProps, {}> {
  render() {
      return (
          this.props.shown &&
          <Portal container={this.props.container}>
            <ModalContainer {...this.props}>{this.props.children}</ModalContainer>
          </Portal>
    );
  }
}

interface ModalContainerProps {
    toggle?: () => void;
    title?: string;
  backdrop?: boolean;
  offsetTop?: number;
  offsetRight?: number;
  offsetBottom?: number;
  offsetLeft?: number;
}
@Styled<ModalContainerProps>(undefined, (props) => ({ onClick: (e) => { e.stopPropagation(); props.toggle();} }))
export class ModalContainer extends StyledComponent<ModalContainerProps, {}> {
  static style = (theme, props) => ({
    position: 'fixed',
    top: props.offsetTop | 0,
    right: props.offsetRight | 0,
    bottom: props.offsetBottom | 0,
    left: props.offsetLeft | 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  });

  render() {
    return (
        <ModalFrame title={this.props.title}>{this.props.children}</ModalFrame>
    );
  }
}


interface ModalFrameProps {
    title?: string;
}
@Styled<ModalFrameProps>(undefined, (props) => ({ onClick: (e) => { e.stopPropagation(); } }))
class ModalFrame extends React.Component<ModalFrameProps, {}> {
    static style = (theme, props) => ({
        backgroundColor: 'white',
        boxShadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
        minWidth: 400,
        minHeight: 150,
        padding: 25
    });
    render() {
        return (
            <Box direction="column">
                {this.props.title && <ModalHeader title={this.props.title} />}
                <ModalContent>{this.props.children}</ModalContent>
            </Box>
        );
    }
}


interface ModalHeaderProps {
    title: string;
}
@Styled<ModalHeaderProps>()
class ModalHeader extends React.Component<ModalHeaderProps, {}> {
    static style = (theme, props) => ({
        marginBottom: 5
    });
    render() {
        return (
            <Typography variant="title">{this.props.title}</Typography>
        );
    }
}

interface ModalContentProps {

}
@Styled<ModalContentProps>()
class ModalContent extends React.Component<ModalContentProps, {}> {
    static style = (theme, props) => ({
    });
  render() {
    return (
      this.props.children
    );
  }
}

interface ModalActionsProps {

}
@Styled<ModalActionsProps>()
class ModalActions extends React.Component<ModalActionsProps, {}> {
    static style = (theme, props) => ({
    });
    render() {
        return (
            this.props.children
        );
    }
}

