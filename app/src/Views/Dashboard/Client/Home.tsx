import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react'

import { Stores, DashboardStore } from '../../../Stores'

import Auth from '../../../Services/Auth'


type DashboardProps = DashboardStore & RouteComponentProps<{}>;


@inject((stores: Stores) => stores.dashboardStore)
@observer
export default class Home extends React.Component<DashboardProps, {}> {
    componentDidMount() {
        console.log(this.props.items)

    }

    public render() {
        return (
            <div>
                <h3>Client</h3>
            </div>
        )
    }
}
