import React from 'react'
import './cart-page.css'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
const CartPage = () => {
  const dispatch = useDispatch()
  const handleAddCart = () => dispatch()
  return (
    <section className='cart-container'>
      <span><b>Total :###</b></span>
      <button className='btn-clean-cart'>Cart <i className="fas fa-trash"></i></button>
      <table className='cart-table'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
          <Link to='/detail/23'><img src="http://localhost:5000/images/camera.jpg" alt="" />
          </Link>
          </td>
          <td>10</td>
          <td>$3333</td>
          <td>
            <button className='btn-minus'><i className="fas fa-minus"></i></button>
            <button className='btn-remove'><i className="fas fa-trash"></i></button>
            <button className='btn-plus' onClick={handleAddCart}><i className="fas fa-plus"></i></button>
          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
}

export default CartPage
