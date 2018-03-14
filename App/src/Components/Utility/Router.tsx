import * as React from 'react';
import PropsTypes from 'prop-types';
import { withRouter, RouteComponentProps } from 'react-router-dom';


export default function Router<OriginalProps extends {}>() {
    type Props = OriginalProps;
    return (Component: React.ComponentClass<RouteComponentProps<Props>>) => {
        withRouter<RouteComponentProps<Props>>(
            class extends React.Component<RouteComponentProps<Props>, {}> {
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
        })
    };
};
