import React from 'react'
import './product-list-page.css'
import { Link, Outlet } from 'react-router-dom'

const ProductListPage = ({productsRender}) => {
  
  return (
    <>
      <main className='container-product-list'>
      <h2>Electronics</h2>
      <section className='product-list'>
        {
          productsRender?.map(ele => {
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
