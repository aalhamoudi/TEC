import React from 'react';
import { Manager, Target, Popper, Arrow } from 'react-popper'


export default class Tooltip extends React.Component<{ content: string }, { shown: boolean }> {
    constructor(props, context?) {
        super(props, context);
        this.state = {
            shown: false
        };
    }
    render() {
        return (
            <div style={{ height: 1500 }}>
                <Manager>
                    <Target style={{ display: "inline" }}>{this.props.children}</Target>
                    <Popper eventsEnabled={this.state.shown} placement="left">{this.props.content}</Popper>
                </Manager>
            </div>
        );
    }
}