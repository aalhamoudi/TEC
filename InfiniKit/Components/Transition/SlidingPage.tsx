import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Hammer from 'react-hammerjs';
import _throttle from 'underscore-es/throttle';
import Observable from 'rxjs/Observable'
import $ from 'jquery';
import { Transition } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';

import { Page } from '../Structure';

import { Styled, Style } from '../Styles/Styled';

export interface SlidingArticleProps {
    title?: string,
    path?: string,
    exact?: boolean
}
export default class SlidingArticle extends React.Component<SlidingArticleProps, {section: number}> {
    static style = (theme, props): Style => ({
    });

    static contextTypes: Partial<any> = {
        offset: PropTypes.object,
        goUp: PropTypes.func,
        goDown: PropTypes.func
    }
    static ref;
    static mounted;

    throttledScroll;

    static fields = {
        childRefs: new Array<any>(),
        currentSection: 0
    }

    constructor(props, context?) {
        super(props, context);
        this.state = {
            section: 0
        };
    }

    componentWillUnmount() {
        if (SlidingArticle.ref.getBoundingClientRect().top < 0)
            SlidingArticle.ref.scrollIntoView({ behavior: "smooth", block: 'start' })
        SlidingArticle.mounted = false;
    }
    componentWillMount() {
        SlidingArticle.mounted = true;
    }
    componentDidMount() {
        this.throttledScroll = _throttle(this.handleScroll.bind(this), 350)
        if (SlidingArticle.ref.getBoundingClientRect().top < 0)
            SlidingArticle.ref.scrollIntoView({ behavior: "smooth", block: 'start' })
        if (window.onwheel)
            return;
        window.onwheel = this.handleScroll.bind(this);
    }

    goUp(e) {

        if (SlidingArticle.ref.getBoundingClientRect().top === 0 || SlidingArticle.ref.getBoundingClientRect().bottom < document.documentElement.clientHeight)
            this.context.goUp();
        else if (this.state.section  > 0) {
            //SlidingArticle.fields.childRefs[--SlidingArticle.fields.currentSection].scrollIntoView({ block: 'end', behavior: 'smooth' });
            this.setState({ section: this.state.section - 1 });
            
        }

    }

    goDown(e) {

        console.log(this.state.section)

        if (SlidingArticle.ref.getBoundingClientRect().top <= 0 && this.state.section < React.Children.count(this.props.children) - 1) {
            //SlidingArticle.fields.childRefs[++SlidingArticle.fields.currentSection].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            //SlidingArticle.fields.childRefs[SlidingArticle.fields.currentSection].trigger('slidingpage:section', SlidingArticle.fields.currentSection);
            this.setState({ section: this.state.section + 1 });
        }

        else
            this.context.goDown();

    }

    handleScroll(e) {
        if (!SlidingArticle.mounted)
            return;
        e.preventDefault();
        if (e.direction)
            return;
        if (e.deltaY < 0) {
            this.goUp(e);


        }
        else if (e.deltaY > 0) {
            this.goDown(e);
        }
    }

    onSwipe(e) {
        if (!SlidingArticle.mounted)
            return;
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
    
    render() {
        SlidingArticle.fields.childRefs = new Array<any>();
        SlidingArticle.fields.currentSection = 0;
        let offset = this.context.offset.top + this.context.offset.bottom;
        return (
            <div ref={ref => SlidingArticle.ref = ReactDOM.findDOMNode(ref)} >
                <Hammer direction='DIRECTION_VERTICAL' onSwipe={this.onSwipe.bind(this)}>
                    <div style={{ width: '100%', minHeight: `calc(100vh)`, backgroundColor: 'lightgray' }}>
                        <Switch>
                            {React.Children.map(this.props.children, (child, index) => {
                                let section = child as any;
                                return (
                                    <SlidingSection shown={index === this.state.section} id={`${index}`} key={index} offset={offset} ref={ref => SlidingArticle.fields.childRefs.push(ReactDOM.findDOMNode(ref))}>{section.props.children}</SlidingSection>
                                );
                            })}
                        </Switch>
                    </div>
                </Hammer>
            </div>
        );
    }
}



export interface SlidingSectionProps {
    shown: boolean;
    id: string;
    offset?: number;
    ref?: (any) => void;
}
export class SlidingSection extends React.Component<SlidingSectionProps, {}> {
    static style = (theme, props): Style => ({

    });

    ref;

    componentDidMount() {
        if (this.props.ref)
            this.props.ref(this.ref);
        //(ReactDOM.findDOMNode(this.ref) as any).on('slidingpage:section', (e, currentSection) => console.log(currentSection));
        if (this.props.shown)
            console.log(this.props.id);
    }

    shown() {
        console.log(ReactDOM.findDOMNode(this.ref).scrollTop)
    }

    hidden() {
        //ReactDOM.findDOMNode(this.ref).classList.add('animated', 'slideOutUp');
    }

    render() {
        return (
            <Route exact path={`/portfolio/${this.props.id}`} render={props => {
                console.log(props)
                return <div style={{ height: '100vh' }}>{this.props.children}</div>    
            }} />
        );
    }
}
