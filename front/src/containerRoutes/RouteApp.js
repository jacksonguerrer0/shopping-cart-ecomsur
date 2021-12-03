import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavMenu from '../components/NavMenu'
import CartPage from '../containers/CartPage'
import NoMatch from '../containers/NoMatch'
import ProductDisplayPage from '../containers/ProductDisplayPage'
import ProductListPage from '../containers/ProductListPage'
import { getLocalCart } from '../helpers/funtions'
import { addCart, getProducts } from '../redux/productsDucks'

const RouteApp = () => {
  const {products} = useSelector(state => state.products)
  const [productsRender, setProductsRender] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(addCart(getLocalCart()))
  }, [dispatch])
  useEffect(() => {
    setProductsRender(products)
  }, [products])
  return (
    <BrowserRouter>
      <NavMenu setProductsRender={setProductsRender}/>
      <Routes>
        <Route path='/' element={<ProductListPage  productsRender={productsRender}/>} />
        <Route path='detail/:id' element={<ProductDisplayPage />}/>
        <Route path='/cart' element={<CartPage />} /> 
        <Route path='*' element={<NoMatch />} /> 

      </Routes>
    </BrowserRouter>
  )
}

export default RouteApp
