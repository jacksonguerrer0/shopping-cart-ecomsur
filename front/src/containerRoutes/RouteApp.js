import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavMenu from '../components/NavMenu'
import CartPage from '../containers/CartPage'
import ProductDisplayPage from '../containers/ProductDisplayPage'
import ProductListPage from '../containers/ProductListPage'

const RouteApp = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path='/' element={<ProductListPage />} />
        <Route path='detail/:id' element={<ProductDisplayPage />}/>
        <Route path='/cart' element={<CartPage />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default RouteApp
