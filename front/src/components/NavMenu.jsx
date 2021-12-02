import React from 'react'
import logoDesktop from '../assets/LOGO-ECOMSUR-white-2.png'
import logoMobile from '../assets/favicon.png'
import './nav-menu.css'
const NavMenu = () => {
  return (
    <header className='container-nav'>
      <nav className='nav-menu'>
      <picture>
        <source media="(min-width: 600px)" srcSet={logoDesktop} />
        <img src={logoMobile} alt="ecomsur" />
      </picture>
      <input type="search" name="nav-search" placeholder='Search Product...' />
      carrito 
    </nav>
    </header>
  )
}

export default NavMenu
