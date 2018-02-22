import React from 'react';
import Responsive from 'react-responsive';

export const XS = props => <Responsive {...props} maxWidth={768} />;
export const SM = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
export const MD = props => <Responsive {...props} minWidth={992} maxWidth={1199} />;
export const LG = props => <Responsive {...props} minWidth={1200} maxWidth={1919} />;
export const XL = props => <Responsive {...props} minWidth={1920} />;