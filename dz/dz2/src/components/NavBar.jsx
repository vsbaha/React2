import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>form</NavLink>
                    </li>
                    <li>
                        <NavLink to='/posts'>post</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;