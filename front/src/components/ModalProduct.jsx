import React from 'react'
import { Link } from 'react-router-dom'
import './modal-product.css'

const ModalProduct = () => {
  return (
    <div className='modal-container'>
      <article className='modal-content'>
        <header><Link to='/'>Salir</Link></header>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque iusto excepturi rem at culpa, neque soluta eos, minima officia laudantium alias laboriosam quaerat quia ipsam, consequatur hic. Corrupti, quam vel?
        </div>
      </article>
    </div>
  )
}

export default ModalProduct
