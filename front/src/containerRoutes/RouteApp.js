import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavMenu from '../components/NavMenu'
import CartPage from '../containers/CartPage'
import ProductDisplayPage from '../containers/ProductDisplayPage'
import ProductListPage from '../containers/ProductListPage'
import { getProducts } from '../redux/productsDucks'

const RouteApp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
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
