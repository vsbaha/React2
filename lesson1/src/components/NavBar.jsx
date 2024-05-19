import {NavLink} from "react-router-dom";
import React from 'react';

function NavBar(props) {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Главная</NavLink>
					</li>
					<li>
						<NavLink to="/about">О нас</NavLink>
					</li>
					<li>
						<NavLink to="/posts">posts</NavLink>
					</li>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;