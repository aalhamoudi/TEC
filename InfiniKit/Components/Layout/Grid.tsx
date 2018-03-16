import React from 'react';

import { Styled, Style, StyledComponent } from '../Styles/Styled';

export interface GridProps {
  tag?: string | React.ReactType;
  subgrid?: boolean;
  inline?: boolean;
  areas?: string;
  columns?: string;
  rows?: string;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
  autoColumns?: number | string;
  autoRows?: number | string;
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
}

@Styled<GridProps>()
export class Grid extends StyledComponent<GridProps, {}> {
  static style = (theme, props): Style => ({
      display: props.subgrid? 'subgrid' : (props.inline? 'inline-grid' : 'grid'),
      gridTemplateAreas: props.areas,
      gridTemplateColumns: props.columns,
      gridTemplateRows: props.rows,
      gridColumnGap: props.gap? props.gap : props.columnGap,
      gridRowGap: props.gap? props.gap : props.rowGap,
      gridAutoColumns: props.autoColumns,
      gridAutoRows: props.autoRows,
      gridAutoFlow: props.autoFlow
  });

  render() {
    const Tag = this.props.tag? this.props.tag : 'div';
    return (
      <Tag></Tag>
    );
  }
}

export interface GridItemProps {
  tag?: string | React.ReactType;
  area?: string;
  row?: number | string | 'auto';
  column?: number | string | 'auto';
  justify: 'start' | 'end' | 'center' | 'stretch';
  align: 'start' | 'end' | 'center' | 'stretch';
};
@Styled<GridItemProps>()
export class GridItem extends StyledComponent<GridItemProps, {}> {
  static style = (theme, props): Style => ({
      gridArea: props.area,
      gridRow: props.row,
      gridColumn: props.column,
      justifySelf: props.justify,
      alignSelft: props.align
  });

  render() {
    const Tag = this.props.tag? this.props.tag : 'div';
    return (
      <Tag></Tag>

    );
  }
}
