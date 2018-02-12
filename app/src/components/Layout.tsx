import * as React from 'react'
import { NavBar } from './Navigation'
import { TopBar } from './Toolbars'

export class Layout extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <NavBar width={70} />
                <TopBar />
                <div className='container-fluid' style={{marginTop: 50, marginLeft: 70}}>{ this.props.children }</div>
            </div>
        );
    }
}
