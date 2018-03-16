import * as React from 'react';
import PropsTypes from 'prop-types';

export interface StyleProps {
    style?: any;
}

export function Style<OriginalProps extends {}>(Style: (theme?: any, props?: any) => any) {
    type Props = OriginalProps & StyleProps;
    return (Component: React.ComponentClass<Props>) => {
        return class extends React.Component<Props, {}> {
            static contextTypes = {
                theme: PropsTypes.object
            }

            render() {
                return <Component style={Style(this.context.theme[Component.name], this.props)} {...this.props} />
            }
        };
    };
};
