import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

const Layout = () => {
    return (
        <div>
            <header><NavBar/></header>
            <main><Outlet/></main>
            <footer>Hello world</footer>
        </div>
    );
};

export default Layout;