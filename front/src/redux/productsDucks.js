import axios from "axios";
import { types } from "./types/types";
// - El servidor se encuentra en:
//   `http://localhost:5000/`
// - La lista de productos se encuentra:
//   `http://localhost:5000/api/products`
// - Puedes encontrar cada producto por su ID:
//   `http://localhost:5000/api/products/1`
// - Las imágenes se encuentran en:|
//   `http://localhost:5000/images/{{nombre-de-la-imagen}}`
const urlProducts = 'http://localhost:5000/api/products';
const urlImages = 'http://localhost:5000'
// 
const initialState = {
  products: [],
  productsCart: [],
}

// Reducer
const productsDucks = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case types.ADD_PRODUCT_CART:
      return{
        ...state,
        productsCart: action.payload
      }
    case types.DELETE_ONE_PRODUCT_CART:
      return {
        ...state, 
        productsCart: action.payload
      }
    case types.REMOVE_ALL_PRODUCT_CART:
      return {
        ...state,
        productsCart: action.payload
      }
    case types.CLEAR_CART: 
      return{
        ...state,
        productsCart: action.payload
      }
    default:
      return state;
  }
}
export default productsDucks
// Ations


const insertProduct = (products) => ({
  type: types.GET_PRODUCTS,
  payload: products
})
const addCart = (cart) => ({
  type: types.ADD_PRODUCT_CART,
  payload: cart
})
const deleteOneCart = (cart) => ({
  type: types.DELETE_ONE_PRODUCT_CART,
  payload: cart
})


export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(urlProducts)
    const data = await res.data
    const newData = []
    data.forEach(ele => {
      newData.push({...ele, image: urlImages+ele.image})
    });
    dispatch(insertProduct(newData))

  } catch (err) {
    let message =  err.response?.statusText || "Ocurrió un error";
    throw message
  }
}
export const addProductCart = (id, quantity = 1) => (dispatch, selector) => {
  const {products} = selector(state => state)
  const product = products.products.find(ele => ele._id === id)
  const productCart = products.productsCart.find(ele => ele._id === id)
  const noDuplicates = products.productsCart.map(ele => (
    ele._id === id ? {...ele, quantity: ele.quantity + quantity} : ele
  ))
  const cartInitial = [...products.productsCart, {...product, quantity: quantity}]
  const newProductsCart = productCart 
  ? noDuplicates
  : cartInitial
  dispatch(addCart(newProductsCart))
}

export const deleteOneProductCart = (id) => (dispatch, selector) => {
  const {products} = selector(state => state)
  const productCart = products.productsCart.find(ele => ele._id === id)
  const noDuplicates = products.productsCart.map(ele => (
    ele._id === id ? {...ele, quantity: ele.quantity - 1} : ele
  ))
  const cartFilter = products.productsCart.filter(ele => ele._id !== id)
  const newProductsCart = productCart.quantity > 1
  ? noDuplicates
  : cartFilter
  dispatch(deleteOneCart(newProductsCart))
}

export const deleteProductCart = (id) => (dispatch, selector) => {
  const {products} = selector(state => state)
  const cartFilter = products.productsCart.filter(ele => ele._id !== id)
  dispatch({
    type: types.REMOVE_ALL_PRODUCT_CART,
    payload: cartFilter
  })
}

export const clearCart = () => ({
  type: types.CLEAR_CART,
  payload: []
})