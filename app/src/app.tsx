import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { App, Area } from 'infinikit/Components/Structure';

import TEC from './Views/';

export default (data) => {
    return (
        <App data={data}>
            <TEC />
        </App>
    );
};