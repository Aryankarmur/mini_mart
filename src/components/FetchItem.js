
export const fetchProducts = () => {
  
    let fetchedProducts = fetch("https://dummyjson.com/products?limit=194").then((res)=>res.json()).then((data)=>data.products);
    
  return fetchedProducts;
    
};

export const fetchProductByMultyCatagory = async (catArr) => {
  const productData = await fetchProducts();
  const filteredProducts = productData.filter((product) =>catArr.includes(product.category));
  return filteredProducts;
};


export const fetchProductByMultyId = async (productArr) => {
  const productData = await fetchProducts();
//convert array string to number
  const productIds = productArr.map(productid => parseInt(productid));
  
  const filteredProducts = productData.filter((product) =>productIds.includes(product.id));
  
  return filteredProducts;
};