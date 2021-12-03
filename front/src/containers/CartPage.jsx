import React from 'react'
import './cart-page.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProductCart } from '../redux/productsDucks'
const CartPage = () => {
  const dispatch = useDispatch()
  const { productsCart } = useSelector(state => state.products)
  const handleAddCart = (id) => dispatch(addProductCart(id))
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
        {
          productsCart.map(ele => (
            <tr key={ele._id}>
            <td>
            <Link to={`/detail/${ele._id}`}><img src={ele.image} alt={ele.name} />
            </Link>
            </td>
            <td>{ele.quantity}</td>
            <td>$ {ele.price}</td>
            <td>
              <button className='btn-minus'><i className="fas fa-minus"></i></button>
              <button className='btn-remove'><i className="fas fa-trash"></i></button>
              <button className='btn-plus' onClick={() => handleAddCart(ele._id)}><i className="fas fa-plus"></i></button>
            </td>
          </tr>
          ))
        }
        </tbody>
      </table>
    </section>
  )
}

export default CartPage
