import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import logoDesktop from '../assets/LOGO-ECOMSUR-white-2.png'
import logoMobile from '../assets/favicon.png'
import './nav-menu.css'
import { useSelector } from 'react-redux'
import { getTotalQuantity } from '../helpers/funtions'
const NavMenu = ({setProductsRender}) => {
  const { productsCart, products } = useSelector(state => state.products)
  const [search, setSearch] =useState()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(search)
    const filter = products.filter(ele => {
      return (ele.name.toLowerCase().includes(search.toLowerCase()))
    })
    navigate(`/`)
    setProductsRender(filter)
    // setSearchParams(search)
  }

  return (
    <header className='container-nav'>
      <nav className='nav-menu'>
        <Link to='/'>
          <picture>
            <source media="(min-width: 600px)" srcSet={logoDesktop} />
            <img src={logoMobile} alt="ecomsur" />
          </picture>
        </Link>
        <form onSubmit={handleSearch}>
        <input type="search" name="nav-search" placeholder='Search Product...' onChange={(e) => setSearch(e.target.value)} />
        </form>
        <div className='nav-cart'><Link to='/cart' ><span>{getTotalQuantity(productsCart)}</span><i className="fas fa-shopping-cart"></i></Link>
        </div>
      </nav>
    </header>
  )
}

export default NavMenu
