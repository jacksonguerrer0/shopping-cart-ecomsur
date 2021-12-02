import React from 'react'
import { Link } from 'react-router-dom'
import logoDesktop from '../assets/LOGO-ECOMSUR-white-2.png'
import logoMobile from '../assets/favicon.png'
import './nav-menu.css'
const NavMenu = () => {
  return (
    <header className='container-nav'>
      <nav className='nav-menu'>
        <Link to='/'>
          <picture>
            <source media="(min-width: 600px)" srcSet={logoDesktop} />
            <img src={logoMobile} alt="ecomsur" />
          </picture>
        </Link>
        <input type="search" name="nav-search" placeholder='Search Product...' />
        <Link to='/cart'><i className="fas fa-shopping-cart"></i></Link>
      </nav>
    </header>
  )
}

export default NavMenu
