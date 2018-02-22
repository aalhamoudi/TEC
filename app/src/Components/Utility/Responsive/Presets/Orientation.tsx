import React from 'react';
import Responsive from 'react-responsive';

export const Portrait = props => <Responsive {...props} orientation='portrait' />;
export const Landspace = props => <Responsive {...props} orientation='landscape' />;
