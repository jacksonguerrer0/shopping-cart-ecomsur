import React from 'react'
import StarRating from '../components/StarRating'
import './product-display-page.css'
const ProductDisplayPage = () => {
  return (
    <section className='detail-product-container'>
      <img src='http://localhost:5000/images/camera.jpg' alt="" />
      <div className='detail-product-info'>
      <h3>Airpods Wireless Bluetooth Headphones</h3>
      <StarRating rating={4.5} reviews={10}/>
      <span><b>$ 89.99</b></span>
      <br />
      <div className='detail-product-stock'>
        <input type="number" name="quantity" defaultValue='1'  />
        <p>Stock: <b>10</b></p>
      </div>
      <div className='detail-product-buttons'>
        <button disabled>Buy now</button>
        <button disabled={10 < 0 ? true : false}>Add to cart</button>
      </div>
      <details className='detail-product-summary' open>
        <summary><b>Description</b></summary>
        <p>
          <i>Brand: Appel.</i><br />
          Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working. 
        </p>
      </details>
      </div>
    </section>
  )
}

export default ProductDisplayPage
