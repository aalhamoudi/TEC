import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import Parallax from 'react-springy-parallax';
import FirebaseUI from 'firebaseui';
import * as firebase from 'firebase';

import { Stores, DashboardStore } from '../../stores'

import { Auth } from '../../services/auth'

import { isObservable } from 'mobx';



type DashboardProps = DashboardStore & RouteComponentProps<{}>;


@inject((stores: Stores) => stores.dashboardStore)
@observer
export default class DashboardHome extends React.Component<DashboardProps, {}> {
    componentDidMount() {
        console.log(this.props.items)

    }

    public render() {
        return <div>
            {this.props.items.map(item => item.data.value)}
        </div>
    }
}
