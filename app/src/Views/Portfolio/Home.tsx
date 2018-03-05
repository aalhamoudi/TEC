import React from 'react';
import ReactDOM from 'react-dom';
import { RouteComponentProps, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import FirebaseUI from 'firebaseui';
import * as firebase from 'firebase';

import { Stores, PortfolioStore } from '../../Stores'

import Auth from '../../Services/Auth'

import { Article, Layer } from '../../Components';

import Modal from '../../Components/Auxiliary/Modal';
import Tooltip from '../../Components/Auxiliary/Tooltip';
import Sticky from '../../Components/Utility/Sticky';

import Spring from '../../Components/Utility/Animations/Spring';

type PortfolioProps = PortfolioStore & RouteComponentProps<{}>;


@inject((stores: Stores) => stores.portfolioStore)
@observer
export default class Home extends React.Component<PortfolioProps, {}> {
    componentDidMount() {
        //let spring = new Spring(0, 100, 180, 12, 10);
        //console.log(spring.values);
    }

    public render() {
        return (
            <Article>
                <Layer>
                    <div style={{height: 1500}}>Home</div>
              </Layer>
            </Article>
        )
    }
}
