import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import Parallax from 'react-springy-parallax';
import FirebaseUI from 'firebaseui';
import * as firebase from 'firebase';

import { Stores, PortfolioStore } from '../../stores'

import { Auth } from '../../services/auth'

import { isObservable } from 'mobx';

const stars = require("../../images/stars.svg")
const cloud = require("../../images/cloud.svg")


type PortfolioProps = PortfolioStore & RouteComponentProps<{}>;


@inject((stores: Stores) => stores.portfolioStore)
@observer
export default class PortfolioHome extends React.Component<PortfolioProps, {}> {
    componentDidMount() {
        console.log(this.props.items)
        
    }

    public render() {
        return (
            <div>
                <Link to="/dashboard">Dashboard</Link>
                {this.props.items.map(item => item.data.value)}
            </div>
        )
    }
}

class ParallaxView extends React.Component<{}, {}> {
    render() {
        return (
            <Parallax ref="parallax" pages={3} style={{ backgroundColor: "#101010"}}>
                <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#243B4A' }} />>
                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <Parallax.Layer offset={0} speed={0} factor={3} style={{backgroundImage: `url(${stars})`, backgroundSize: "cover"}} />>

                <Parallax.Layer offset={0.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={`${cloud}`} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={`${cloud}`} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                    <img src={`${cloud}`} style={{ display: 'block', width: '20%', marginLeft: '10%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={0} speed={0.5} style={{}} onClick={() => (this.refs.parallax as any).scrollTo(1)}>One</Parallax.Layer> 
                <Parallax.Layer offset={1} speed={0.5} style={{}} onClick={() => (this.refs.parallax as any).scrollTo(2)}>Two</Parallax.Layer> 
                <Parallax.Layer offset={2} speed={0.5} style={{}} onClick={() => (this.refs.parallax as any).scrollTo(0)}>Three</Parallax.Layer> 
            </Parallax>
        );
    }
}