import React from 'react';

export interface StickyProps {
    style?: any,
    position?: 'top' | 'bottom'
}
export default class Sticky extends React.Component<StickyProps, {height: number}> {
    ref;
    initialPos;
    stuck: boolean = false;
    height: number;

    static defaultProps: Partial<StickyProps> = {
        position: 'top'
    };

    static eventListeners = new Array<any>();

    constructor(props, context?) {
        super(props, context);
        this.state = {
            height: 0
        };
    }

    componentDidMount() {
        if (CSS.supports('position', 'sticky')) {
            this.ref.style.position = 'sticky';
            this.setState({ height: this.ref.clientHeight });
        }
        else {
            window.onscroll = this.handleScroll;
            this.initialPos = window.scrollY;

            switch (this.props.position) {
                case 'top': {
                    let top = () => {
                        if (!this.stuck && this.ref.getBoundingClientRect().top <= 0) {
                            this.initialPos = window.scrollY;
                            this.stuck = true;
                            this.ref.style.position = 'fixed';
                        }
                        else if (this.stuck && window.scrollY <= this.initialPos) {
                            this.stuck = false;
                            this.ref.style.position = 'relative';
                        }
                    };
                    Sticky.eventListeners.push(top);
                    break;
                };
                case 'bottom': {
                    let bottom = () => {
                        if (!this.stuck && this.ref.getBoundingClientRect().bottom <= document.documentElement.clientHeight) {
                            this.initialPos = window.scrollY;
                            this.stuck = true;
                            this.ref.style.position = 'fixed';
                        }
                        else if (this.stuck && window.scrollY <= this.initialPos) {
                            this.stuck = false;
                            this.ref.style.position = 'relative';
                        }
                    };
                    Sticky.eventListeners.push(bottom);
                    break;
                };
            }

        }
    }

    handleScroll() {
        Sticky.eventListeners.forEach(listener => listener());
    }

    render() {
        let style = this.props.position === 'top' ? { top: 0 } : (this.state.height > 0 ? { top: `calc(100vh - ${this.state.height}px)` } : {bottom: 0});
        return <div style={Object.assign({}, this.props.style, style)} ref={ref => this.ref = ref}>{this.props.children}</div>
    }
}