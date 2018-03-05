import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import FirebaseUI from 'firebaseui';
import * as firebase from 'firebase';

import { Stores, PortfolioStore } from '../../Stores'

import Auth from '../../Services/Auth'

import { Article } from '../../Components';

type PortfolioProps = PortfolioStore & RouteComponentProps<{}>;


@inject((stores: Stores) => stores.portfolioStore)
@observer
export default class Contact extends React.Component<PortfolioProps, {}> {
    componentDidMount() {
    }

    public render() {
        return (
            <Article>
                <Link to="/dashboard">Contact</Link>
            </Article>
        )
    }
}

