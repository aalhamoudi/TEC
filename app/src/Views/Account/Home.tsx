import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import * as firebase from 'firebase';

import { Stores, AccountStore } from '../../Stores'

import Auth from '../../Services/Auth'

import Button from 'material-ui/Button';

type AccountProps = AccountStore & RouteComponentProps<{}>;


@inject((stores: Stores) => stores.dashboardStore)
@observer
export default class Home extends React.Component<AccountProps, {}> {
    componentDidMount() {

    }

    public render() {
        return (
            <div>Account</div>
        )
    }
}
