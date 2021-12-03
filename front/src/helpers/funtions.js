export const filterProductDetail = (products, id) => {
  const filter = products.filter(ele => ele._id === id)
  return filter
}