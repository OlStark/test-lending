import React from 'react';
import './index.css'
import icon from '../image/badaboom.svg';
import { NavLink } from 'react-router-dom'
import {HandySvg} from 'handy-svg';


function Header ()  {
    return (
          <div className='header'>
            <HandySvg
                src = {icon}
                className = 'icon'
              />
              <ul className='nav'>
                <li>
                  <NavLink to="/" >Главная страница</NavLink>
                </li>
                <li>
                  <NavLink to="/about" >О нас </NavLink>
                </li>
                <li>
                  <NavLink to="/catalog" >Каталог</NavLink>
                </li>
              </ul>
            </div>
    )
}



export default Header