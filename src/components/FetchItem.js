let productsCache = null;
let productsPromise = null;

export const fetchProducts = async () => {
  if (productsCache) {
    return productsCache;
  }

  if (!productsPromise) {
    productsPromise = fetch("https://dummyjson.com/products?limit=194")
      .then((res) => res.json())
      .then((data) => {
        productsCache = data.products;
        return productsCache;
      });
  }

  return productsPromise;
};

export const fetchProductByMultyCatagory = async (catArr) => {
  const productData = await fetchProducts();
  const filteredProducts = productData.filter((product) =>
    catArr.includes(product.category),
  );
  return filteredProducts;
};

export const fetchProductByMultyId = async (productArr) => {
  const productData = await fetchProducts();
  const productIds = productArr.map((productid) => parseInt(productid));
  const filteredProducts = productData.filter((product) =>
    productIds.includes(product.id),
  );
  return filteredProducts;
};
