import React from 'react';
import MenuHubApollo from '../components/menu/MenuHubApollo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function menu(){
    return(
        <>
        <h1>menu.js page</h1>
        <MenuHubApollo />

        </>
    )
}