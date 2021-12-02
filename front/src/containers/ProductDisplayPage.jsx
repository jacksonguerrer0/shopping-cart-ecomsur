import React from 'react'
import StarRating from '../components/StarRating'
import './product-display-page.css'
const ProductDisplayPage = () => {
  return (
    <section className='detail-product-container'>
      <img src='http://localhost:5000/images/camera.jpg' alt="" />
      <h3>Airpods Wireless Bluetooth Headphones</h3>
      <StarRating rating={4.5} reviews={10}/>
      <span>$ 89.99</span>
      <p>Stock: <b>10</b></p>
      <details className='detail-product-summary'>
        <summary><b>Description</b></summary>
        <p>
          <i>Brand: Appel.</i><br />
          Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working.
        </p>
      </details>
      <div className='detail-product-buttons'>
        <button disabled>Buy now</button>
        <button disabled={10 < 0 ? true : false}>Add to cart</button>
      </div>
    </section>
  )
}

export default ProductDisplayPage
