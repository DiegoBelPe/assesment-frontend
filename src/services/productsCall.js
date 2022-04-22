const API_URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    const products = await response.json();
    return products;
  } catch {
    throw new Error('Error in fetch products');
  }
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const product = await response.json();
    return product;
  } catch {
    throw new Error('Error in fetch a product');
  }
};
