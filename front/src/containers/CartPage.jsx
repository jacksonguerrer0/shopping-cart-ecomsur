import React from 'react'
import './cart-page.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProductCart, clearCart, deleteOneProductCart, deleteProductCart } from '../redux/productsDucks'
import { getTotalPrice } from '../helpers/funtions'
const CartPage = () => {
  const dispatch = useDispatch()
  const { productsCart } = useSelector(state => state.products)
  const handleAddCart = (id) => dispatch(addProductCart(id))
  const handleDeleteOneCat  = (id) => dispatch(deleteOneProductCart(id))
  const handleDeleteProductCart = (id) => dispatch(deleteProductCart(id))
  const handleClearCart = () => dispatch(clearCart())
  return (
    <section className='cart-container'>
      <span><b>Total {getTotalPrice(productsCart)}</b></span>
      <button className='btn-clean-cart' onClick={handleClearCart}>Cart <i className="fas fa-trash"></i></button>
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
          productsCart?.map(ele => (
            <tr key={ele._id}>
            <td>
            <Link to={`/detail/${ele._id}`}><img src={ele.image} alt={ele.name} />
            </Link>
            </td>
            <td>{ele.quantity}</td>
            <td>$ {ele.price}</td>
            <td>
              <button className='btn-minus' onClick={() => handleDeleteOneCat(ele._id)}><i className="fas fa-minus"></i></button>
              <button className='btn-remove' onClick={() => handleDeleteProductCart(ele._id)}><i className="fas fa-trash"></i></button>
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
