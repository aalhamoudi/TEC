import * as React from 'react';
import { Area } from '../Structure';
import { Route } from 'react-router-dom';

export class ScrollingArea extends React.Component<{title: string, path: string, nav?: React.ReactType, theme?: any, exact?: boolean}, {pages: string[], currentPage: number}> {
    area;
    router;
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            pages: new Array(),
            currentPage: 0
        };
    }

    scrollUp() {
        if (this.state.currentPage > 0) {
            this.setState({pages: this.state.pages, currentPage: this.state.currentPage - 1}, () => this.router.history.push(this.state.pages[this.state.currentPage]));
            
        }
    }

    scrollDown() {
        if (this.state.currentPage < this.state.pages.length - 1) {
            this.setState({pages: this.state.pages, currentPage: this.state.currentPage + 1}, () => this.router.history.push(this.state.pages[this.state.currentPage]));
            
        }
    }

    handleScroll(e) {
        if (e.deltaY < 0)
            this.scrollUp();
        else
            this.scrollDown();
    }

    componentDidUpdate() {
        if (this.area) {
            let index = this.state.pages.indexOf(this.router.location.pathname)
            if (this.state.currentPage !== index)
                this.setState({pages: this.state.pages, currentPage: index})
        }
    }

    componentDidMount() {
        if (this.area) {
            var pages = this.area.props.children.map((child, index) => {
                let page = child as any;
                return page.props.path;
            });
            this.setState({
                pages: pages,
                currentPage: pages.indexOf(this.router.location.pathname)
            });
        }
    }

    render() {
        return (
            <Route path={this.props.path} render={props => {
                this.router = {...props};
                return (
                    <div onWheel={this.handleScroll.bind(this)}>
                            <Area ref={(area) => this.area = area} title={this.props.title} path={this.props.path} nav={this.props.nav} theme={this.props.theme} exact={this.props.exact}>
                                {this.props.children}
                            </Area>
                    </div>
                );
            }} />
        );
    };
}