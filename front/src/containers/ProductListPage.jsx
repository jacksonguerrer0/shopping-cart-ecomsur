import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './product-list-page.css'
import { Link, Outlet } from 'react-router-dom'

const ProductListPage = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then(res => setProduct(res.data))
  }, [])
  console.log(product)
  return (
    <>
        <main className='container-product-list'>
      <h2>Electronics</h2>
      <section className='product-list'>
        {
          product.map(ele => {
            let image = `http://localhost:5000${ele.image}`
            console.log(image)
            return(
            <Link to={`detail/${ele._id}`} key={ele._id} className='product-list-card'>
            <img src={image} alt={ele.name} />
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
