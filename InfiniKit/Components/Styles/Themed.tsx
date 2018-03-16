import * as React from 'react';
import PropsTypes from 'prop-types';

export function Themed<OriginalProps extends {}>() {
    type Props = OriginalProps;
    return (Component: React.ComponentClass<Props>) => {
        return class extends React.Component<Props, {}> {
            static contextTypes = {
                theme: PropsTypes.object
            }
            static childContextTypes = {
                theme: PropsTypes.object
            }

            getChildContext() {
                return { theme: this.context.theme };
            }

            render() {
                return <Component {...this.props} />
            }
        };
    };
};
