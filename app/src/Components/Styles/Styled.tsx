import * as React from 'react';
import PropsTypes from 'prop-types';

export interface Style {
    [key: string]: any;
    hover?: any;
    focus?: any;
    active?: any;
}

export abstract class StyledComponent<P, S> extends React.Component<P, S> {
    static contextTypes = {
        theme: PropsTypes.object
    };
    static style = (theme, props): Style => ({});
}

export function Styled<ComponentProps>(tag?: string | React.ReactType, exclude?: string[]) {
    return (Component: React.ComponentClass<any>) => {
        return class extends StyledComponent<ComponentProps, {focus: boolean, hover: boolean, active: boolean}> {
            static style = (Component as any).style;

            theme;

            normalStyle: any;
            focusStyle: any;
            hoverStyle: any;
            activeStyle: any;

            constructor(props, context?) {
                super(props, context);
                this.state = {
                    focus: false,
                    hover: false,
                    active: false
                };
                this.theme = Object.assign({}, this.context.theme, {Component: this.context.theme.Components[Component.name]});
                delete this.theme.Components;
                this.normalStyle = (Component as any).style(this.theme, this.props);
                if (this.normalStyle) {
                    if (this.normalStyle.focus) {
                        this.focusStyle = this.normalStyle.focus;
                        delete this.normalStyle.focus;
                    }
                    if (this.normalStyle.hover) {
                        this.hoverStyle = this.normalStyle.hover;
                        delete this.normalStyle.hover;
                    }
                    if (this.normalStyle.active) {
                        this.activeStyle = this.normalStyle.active;
                        delete this.normalStyle.active;
                    }
                }
                
            }
            
            onFocus = () => {
                this.setState({
                    focus: true,
                    hover: this.state.hover,
                    active: this.state.active
                });
            }

            onBlur = () => {
                this.setState({
                    focus: false,
                    hover: this.state.hover,
                    active: this.state.active
                });
            }

            onMouseEnter = () => {
                this.setState({
                    focus: this.state.focus,
                    hover: true,
                    active: this.state.active
                });            
            }

            onMouseLeave = () => {
                this.setState({
                    focus: this.state.focus,
                    hover: false,
                    active: this.state.active
                });   
            }

            onMouseDown = () => {
                this.setState({
                    focus: this.state.focus,
                    hover: this.state.hover,
                    active: true
                });   
            }

            onMouseUp = () => {
                this.setState({
                    focus: this.state.focus,
                    hover: this.state.hover,
                    active: false
                });   
            }

            getStyle() {
                let style;
                if (this.state.active)
                    style = Object.assign({}, this.normalStyle, this.activeStyle);
                else if (this.state.hover)
                    style = Object.assign({}, this.normalStyle, this.hoverStyle);
                else if (this.state.focus)
                    style = Object.assign({}, this.normalStyle, this.focusStyle);
                else
                    style = this.normalStyle;

                return style;
            }


            render() {
                const Tag = tag || (this.props as any).tag || 'div';

                let containerProps = Object.assign({}, this.props);
                if (exclude) exclude.forEach(prop => delete containerProps[prop]);

                let componentProps = Object.assign({}, this.props, {theme: this.theme});
                return (
                    <Tag style={this.getStyle()}
                        onMouseDown={this.activeStyle && this.onMouseDown.bind(this)}
                        onMouseUp={this.activeStyle && this.onMouseUp.bind(this)}
                        onMouseEnter={this.hoverStyle && this.onMouseEnter.bind(this)} 
                        onMouseLeave={this.hoverStyle && this.onMouseLeave.bind(this)}
                        onFocus={this.focusStyle && this.onFocus.bind(this)}
                        onBlur={this.focusStyle && this.onBlur.bind(this)}
                        {...containerProps}
                    >
                        <Component {...componentProps} />
                    </Tag>
                );
            }
        };
    };
};
