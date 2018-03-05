import * as React from 'react';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import * as firebase from 'firebase';

import { Stores, AccountStore } from '../../Stores'

import Auth from '../../Services/Auth'

import Button from 'material-ui/Button';

type AccountProps = AccountStore & RouteComponentProps<{}>;


@inject((stores: Stores) => stores.dashboardStore)
@observer
export default class SignIn extends React.Component<AccountProps, {}> {
    componentDidMount() {
        Auth.signIn("theloar@gmail.com", "a2d3m4s8");
    }

    public render() {
        return (
            <Redirect to="/portfolio" />
        )
    }
}
