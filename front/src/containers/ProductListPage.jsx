import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './product-list-page.css'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/productsDucks'

const ProductListPage = () => {
  const {products} = useSelector(state => state.products)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <>
      <main className='container-product-list'>
      <h2>Electronics</h2>
      <section className='product-list'>
        {
          products?.map(ele => {
            return(
            <Link to={`detail/${ele._id}`} key={ele._id} className='product-list-card'>
            <img src={ele.image} alt={ele.name} />
            <span>$ {ele.price}</span>
            <h3><small>{ele.name}</small></h3>
          </Link>
          )})
        }
      </section>
    </main>
    <Outlet />
    </>
  )
}

export default ProductListPage
