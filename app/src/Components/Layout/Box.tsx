import React from 'react';

import { Styled, Style, StyledComponent } from '../Styles/Styled'

enum FlexDirection {
    row = 'row',
    rowReverse = 'row-reverse',
    column = 'column',
    columnReverse = 'column-reverse'
}

interface BoxProps {
    tag?: string | React.ReactType;    
    direction?: 'row' | 'column';
    reverse?: boolean;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
    order?: number;
    grow?: number;
    shrink?: number;
    bases?: number;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

@Styled<BoxProps>()
export default class Box extends StyledComponent<BoxProps, {}> {
    static style = (theme, props): Style => ({
        display: 'flex',
        flexDirection: props.reverse? (props.direction? props.direction + '-reverse' : 'row-reverse')  : (props.direction? props.direction : 'row'),
        wrap: props.wrap? (props.wrap == 'wrap' && props.reverse? 'wrap-reverse' : props.wrap) : 'no-wrap',
        justifyContent: props.justify || 'flex-start',
        alignItems: props.align || 'flex-start',
        alignContent: props.alignContent || 'flex-start',
        order: props.order || 0,
        flexGrow: props.grow || 0,
        flexShrink: props.shrink || 1,
        flexBases: props.bases || 'auto',
        alignSelf: props.alignSelf || 'auto'
    });

    render() {
        return this.props.children
        
       
    }
}

interface BoxItemProps {
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