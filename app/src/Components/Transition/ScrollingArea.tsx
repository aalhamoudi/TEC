import * as React from 'react';
import PropTypes from 'prop-types';
import Hammer from 'react-hammerjs';

import { Debounce } from 'react-throttle';
import Throttle from 'raf-throttle';
import _debounce from 'underscore-es/Debounce'

import { Area } from '../Structure';
import { Route } from 'react-router-dom';

export class ScrollingArea extends React.Component<{title: string, path: string, brand?: string, nav?: React.ReactType, theme?: any, exact?: boolean}, {pages: string[], currentPage: number}> {
    static contexTypes = {
        router: PropTypes.object
    }

    router;
    area;

    constructor(props, context) {
        super(props, context);
        this.state = {
            pages: new Array(),
            currentPage: 0
        };

        //this.goDown = _debounce(this.goDown, 2500).bind(this);
    }

    goUp(e) {
        if (this.state.currentPage > 0) {
            this.setState({pages: this.state.pages, currentPage: this.state.currentPage - 1}, () => this.router.history.push(this.state.pages[this.state.currentPage]));
            
        }
    }

    goDown(e) {
        if (this.state.currentPage < this.state.pages.length - 1) {
            this.setState({pages: this.state.pages, currentPage: this.state.currentPage + 1}, () => this.router.history.push(this.state.pages[this.state.currentPage]));
            
        }
    }

    onWheel(e) {
        if (e.deltaY < 0)
            this.goUp(e);
        else
            this.goDown(e);
    }

    onSwipe(e) {
        switch (e.direction) {
            case 8: {
                this.goDown(e);
            };
                break;

            case 16: {
                this.goUp(e);
            };
                break;
        }
    }

    componentDidUpdate() {
            let index = this.state.pages.indexOf(this.router.location.pathname)
            if (this.state.currentPage !== index)
                this.setState({ pages: this.state.pages, currentPage: index })
    }


    componentDidMount() {
        var pages = React.Children.map(this.props.children, (child, index) => {
            let page = child as any;
            return page.props.path;
        });
        this.setState({
            pages: pages,
            currentPage: pages.indexOf(this.router.location.pathname)
        });
    }

    render() {
        return (
            <Route path={this.props.path} render={props => {
                this.router = { ...props };
                return (
                    <Debounce time="1000" handlers={["onSwipe", "onWheel"]}>
                        <Hammer id="root" style={{ width: '100%', height: '100%' }} direction='DIRECTION_VERTICAL' onSwipe={this.onSwipe.bind(this)} onWheel={this.onWheel.bind(this)}>
                            <div style={{ backgroundColor: 'rgba(125, 188, 255, 0.6)' }}>
                                <Area ref={ref => this.area = ref} title={this.props.title} brand={this.props.brand} path={this.props.path} nav={this.props.nav} theme={this.props.theme} exact={this.props.exact}>
                                    {this.props.children}
                                </Area>
                            </div>
                        </Hammer>
                    </Debounce>
                );
            }} />
        );
    };
}