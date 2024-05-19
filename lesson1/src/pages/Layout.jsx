import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

function Layout() {
	return (
		<>
			<header><NavBar/></header>
			<main><Outlet/></main>
			<footer>Geeks 2024</footer>
		</>

	);
}

export default Layout;