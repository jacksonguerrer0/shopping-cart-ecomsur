import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavMenu from '../components/NavMenu'
import ProductListPage from '../containers/ProductListPage'

const RouteApp = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path='/' element={<ProductListPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteApp
