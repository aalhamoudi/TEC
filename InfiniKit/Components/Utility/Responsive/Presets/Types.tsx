import React from 'react';
import Responsive from 'react-responsive';

export const All = props => <Responsive {...props} type='all' />;
export const GridType = props => <Responsive {...props} type='grid' />;
export const Aural = props => <Responsive {...props} type='aural' />;
export const Braille = props => <Responsive {...props} type='braille' />;
export const Handheld = props => <Responsive {...props} type='handheld' />;
export const Print = props => <Responsive {...props} type='print' />;
export const Projection = props => <Responsive {...props} type='projection' />;
export const Screen = props => <Responsive {...props} type='screen' />;
export const TTY = props => <Responsive {...props} type='tty' />;
export const TV = props => <Responsive {...props} type='tv' />;
export const Embossed = props => <Responsive {...props} type='embossed' />;
