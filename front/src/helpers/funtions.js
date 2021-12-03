export const filterProductDetail = (products, id) => {
  const filter = products.filter(ele => ele._id === id)
  return filter
}

export const getTotalPrice = (products) => {
  let totalPrice = 0
  products.forEach(ele => (totalPrice = totalPrice + (ele.price * ele.quantity)))
  const parse = totalPrice.toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})
  return parse
}

export const getTotalQuantity = (products) => {
  let totalQuantity = 0
  products.forEach(ele => (totalQuantity = totalQuantity + ele.quantity))
  return totalQuantity > 99 ? '+99' : totalQuantity
}

export const getLocalCart = () => {
  return JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')): []
}
export const setLocalCart = (productsCart) => {
  localStorage.setItem('cart', JSON.stringify(productsCart))
}