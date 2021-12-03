import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import StarRating from '../components/StarRating'
import { filterProductDetail } from '../helpers/funtions'
import { addProductCart } from '../redux/productsDucks'
import './product-display-page.css'
const ProductDisplayPage = () => {
  const [product, setProduct] = useState([])
  const [quantity, setQuantity] = useState('1')
  const {products} = useSelector(state => state.products)
  const dispatch = useDispatch()
  let {id} = useParams()


  const handleQuantity = (e) => setQuantity(e.target.value)
  const handleAddCart = (e) => {
    const parseQuantity = parseInt(quantity)
    dispatch(addProductCart(id, parseQuantity))
  }
  useEffect(() => {
    setProduct(filterProductDetail(products, id))
  }, [products, id])
  return (
    <>
    {
      product.map(ele => (
    <section className='detail-product-container' key={ele._id}>
      <img src={ele.image} alt={ele.name} />
      <div className='detail-product-info'>
      <h3>{ele.name}</h3>
      <StarRating rating={ele.rating} reviews={ele.numReviews}/>
      <span><b>$ {ele.price}</b></span>
      <br />
      <div className='detail-product-stock'>
        <input type="number" name="quantity" defaultValue='1' onChange={handleQuantity} min='1' />
        <p><small>stock: {ele.countInStock}</small></p>
      </div>
      <div className='detail-product-buttons'>
        <button disabled>Buy now</button>
        <button disabled={ele.countInStock === 0 ? true : false} onClick={handleAddCart}>Add to cart</button>
      </div>
      <details className='detail-product-summary' open>
        <summary><b>Description</b></summary>
        <p>
          <i>Brand: {ele.brand}.</i><br />
          {ele.description}. 
        </p>
      </details>
      </div>
    </section>
      ))
    }
    </>
  )
}

export default ProductDisplayPage
