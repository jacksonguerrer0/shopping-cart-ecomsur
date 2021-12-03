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
