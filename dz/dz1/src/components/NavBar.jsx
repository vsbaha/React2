import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
          <nav>
    <ul>
      <li>
        <NavLink to="/">Главная</NavLink>
      </li>
      <li>
        <NavLink to="/posts/">Посты</NavLink>
      </li>
      <li>
        <NavLink to="/postmade">Создать пост</NavLink>
      </li>
      </ul>
  </nav>
    </div>
  )
}

export default NavBar