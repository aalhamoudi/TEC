import React from 'react';

import { Styled, Style, StyledComponent } from '../Styles/Styled'

enum FlexDirection {
    row = 'row',
    rowReverse = 'row-reverse',
    column = 'column',
    columnReverse = 'column-reverse'
}

export interface BoxProps {
    tag?: string | React.ReactType;    
    ref?: (any) => void;
    style?: any;
    image?: string;
    background?: string;
    rtl?: boolean;
    direction?: 'row' | 'column';
    reverse?: boolean;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
    order?: number;
    grow?: number | boolean;
    shrink?: number | boolean;
    bases?: number;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    fill?: 'width' | 'height' | 'both' | 'none',
    padding?: number | string,
    margin?: number | string,
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
    opacity?: number;
};

@Styled<BoxProps>('div', props => ({ ref: props.ref}))
export default class Box extends StyledComponent<BoxProps, {}> {
    static style = (theme, props): Style => ({
        display: 'flex',
        flexDirection: props.reverse? (props.direction? props.direction + '-reverse' : 'row-reverse')  : (props.direction? props.direction : 'row'),
        flexWrap: props.wrap? (props.wrap == 'wrap' && props.reverse? 'wrap-reverse' : props.wrap) : 'no-wrap',
        justifyContent: props.justify,
        alignItems: props.align,
        alignContent: props.alignContent,
        order: props.order,
        flexGrow: typeof props.grow === 'boolean'? props.grow? 1 : 0 : props.grow,
        flexShrink: props.shrink,
        flexBases: props.bases,
        alignSelf: props.alignSelf,
        width: props.fill === 'width' || props.fill === 'both'? '100%' : null,
        height: props.fill === 'height' || props.fill === 'both' ? '100%' : null,
        backgroundColor: props.background,
        backgroundImage: props.image && `url('${props.image}')`,
        backgroundSize: props.image && 'cover',
        backgroundPosition: props.image && 'center',
        margin: props.margin && props.margin,
        padding: props.padding && props.padding,
        direction: props.rtl && 'rtl',
        position: props.position,
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        left: props.left,
        opacity: props.opacity

    });

    static defaultProps: Partial<BoxProps> = {
        grow: 0,
        shrink: 1
    };

    render() {
        return this.props.children
        
       
    }
}

export class CenterBox extends React.Component<{}, {}> {
    render() {
        return (
            <Box justify="center" align="center">{this.props.children}</Box>
        );
    }
}

export interface BoxItemProps {
    order?: number;
    grow?: number;
    shrink?: number;
    bases?: number;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};
@Styled<BoxItemProps>()
export class BoxItem extends StyledComponent<BoxItemProps, {}> {
    static style = (theme, props): Style => ({
        order: props.order || 0,
        flexGrow: props.grow || 0,
        flexShrink: props.shrink || 0,
        flexBases: props.bases || 'auto',
        alignSelf: props.alignSelf || 'auto'
    });

    render() {
        return this.props.children
    }
}