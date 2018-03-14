import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import FirebaseUI from 'firebaseui';
import * as firebase from 'firebase';

import { Stores, PortfolioStore } from '../../Stores'

import Auth from '../../Services/Auth'

import { Article } from '../../Components';

type PortfolioProps = PortfolioStore & RouteComponentProps<{}>;



export default class Work extends React.Component<PortfolioProps, {}> {
    componentDidMount() {
    }

    public render() {
        return (
            <Article>
            </Article>
        )
    }
}

