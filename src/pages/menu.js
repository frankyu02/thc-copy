import React from 'react';
import { QueryParamProvider } from 'use-query-params'
import MenuHubApollo from '../components/menu/MenuHubApollo';
import history from '../utils/history';

export default function menu(){
    return(
        <QueryParamProvider history={history}>
            <MenuHubApollo history={history}/>
        </QueryParamProvider>
    )
}