import { types } from "./types/types";

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

