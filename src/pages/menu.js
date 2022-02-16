import React from 'react';
import { QueryParamProvider } from 'use-query-params'
import MenuHubApollo from '../components/menu/MenuHubApollo';
import {globalHistory, Location} from '@reach/router'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function menu(){
    return(
        <>
        <h1>menu.js page</h1>
        <Router>
            <Routes>
                <Route path="/menu" element={<MenuHubApollo />}></Route>
            </Routes>
        </Router>
        </>
    )
}