import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Portal, { PortalComponent } from './Portal';
import Box from "../Layout/Box";
import Typography from "../Content/Typography";
import { Styled, StyledComponent, Style } from "../Styles/Styled";
import Layers, { Layer } from '../Layout/Layers';

export interface ModalProps {
    shown: boolean;
    toggle?: () => void;
    title?: string;
  container?: PortalComponent;
    backdrop?: boolean;
    backgroundColor?: string;
  offsetTop?: number;
  offsetRight?: number;
  offsetBottom?: number;
  offsetLeft?: number;
}
export default class Modal extends React.Component<ModalProps, {}> {
    static childContextTypes = {
        backgroundColor: PropTypes.string,
        toggle: PropTypes.func
    };

    getChildContext() {
        return { backgroundColor: this.props.backgroundColor, toggle: this.props.toggle };
    }

    static defaultProps: Partial<ModalProps> = {
        backgroundColor: 'white',
        backdrop: true
    }

  render() {
      return (
          this.props.shown &&
          <Portal container={this.props.container}>
            <ModalContainer {...this.props}>{this.props.children}</ModalContainer>
          </Portal>
    );
  }
}

export interface ModalContainerProps {
    toggle?: () => void;
    title?: string;
  backdrop?: boolean;
    backdropColor?: string;
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

    static defaultProps: Partial<ModalContainerProps> = {
        backdrop: true
    };
  static contextTypes: Partial<any> = {
      backgroundColor: PropTypes.string,
  }

  render() {
      return (
          <Layers id="ModalContaier">
              {true && <Layer><ModalBackdrop color={this.props.backdropColor} {...this.props}/></Layer>}
              <Layer><ModalFrame title={this.props.title} backgroundColor={this.context.backgroundColor}>{this.props.children}</ModalFrame></Layer>
          </Layers>
    );
  }
}

export interface ModalBackdropProps {
    toggle?: () => void;
    color?: string;
    offsetTop?: number;
    offsetRight?: number;
    offsetBottom?: number;
    offsetLeft?: number;
}
@Styled<ModalBackdropProps>(undefined, (props) => ({ onClick: (e) => { e.stopPropagation(); } }))
class ModalBackdrop extends React.Component<ModalBackdropProps, {}> {
    static style = (theme, props) => ({
        backgroundColor: props.color || 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: props.offsetTop | 0,
        right: props.offsetRight | 0,
        bottom: props.offsetBottom | 0,
        left: props.offsetLeft | 0,
    });


    static defaultProps: Partial<ModalBackdropProps> = {
        color: 'rgba(0, 0, 0, 0.5)'
    };

    render() {
        return (
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} onClick={this.props.toggle}></div>
        );
    }
}

export interface ModalFrameProps {
    title?: string;
    backgroundColor?: string;
}
@Styled<ModalFrameProps>(undefined, (props) => ({ onClick: (e) => { e.stopPropagation(); } }))
class ModalFrame extends React.Component<ModalFrameProps, {}> {
    static style = (theme, props) => ({
        backgroundColor: props.backgroundColor,
        boxShadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
        minWidth: 400,
        minHeight: 150,
        padding: 25
    });


    static defaultProps: Partial<ModalFrameProps> = {
        backgroundColor: 'white'
    };

    render() {
        return (
            <Box direction="column" padding={25}>
                {this.props.title && <ModalHeader title={this.props.title} />}
                <ModalContent>{this.props.children}</ModalContent>
            </Box>
        );
    }
}


export interface ModalHeaderProps {
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

export interface ModalContentProps {

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

export interface ModalActionsProps {

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

