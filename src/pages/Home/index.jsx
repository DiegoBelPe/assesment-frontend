import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../services/productsCall';
import Navbar from '../../components/Navbar';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async (query = {}) => {
    const data = await getProducts(query);
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="home">
      <div>
        <Navbar />
      </div>
      <h1 className="titleproducts">PRODUCTS</h1>
      <div className="productscard">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
