import React from 'react';

interface IconProps {
    icon: string;
    size?: number;
}
export default class Icon extends React.Component<IconProps, {}> {
    static defaultProps: Partial<IconProps> = {
        size: 2
    };
    render() {
        return (
            <span className={`fa fa-${this.props.icon} fa-${this.props.size}x`} />
        );
    }
}