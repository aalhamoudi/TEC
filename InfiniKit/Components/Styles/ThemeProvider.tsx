import * as React from 'react';
import PropTypes from 'prop-types';

import { DefaultTheme } from './Theme'

export default class ThemeProvider extends React.Component<{theme?: any}, {}> {
    static childContextTypes = {
        theme: PropTypes.object
    }

    getChildContext() {
        return {theme: Object.assign({}, DefaultTheme, this.props.theme)};
    }

    render() {
        return this.props.children;
    }
}
