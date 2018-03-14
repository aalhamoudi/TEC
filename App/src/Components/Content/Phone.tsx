import React from 'react';

import PhoneIcon from 'material-ui-icons/Phone';

interface PhoneProps {
    number: number;
}
export default class Phone extends React.Component<PhoneProps, {}> {
    render() {
        return (
            <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><PhoneIcon /> {this.props.number}</span>
        );
    }
}
