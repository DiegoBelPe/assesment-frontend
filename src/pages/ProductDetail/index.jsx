import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/productsCall';
import './ProductDetail.css';

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const fetchProduct = async () => {
    const data = await getProduct(params.id);
    setProduct(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="productdetail">
      <div>{product.title}</div>
      <img className="imagecard" src={product.image} alt="" />
      <div>
        <div>
          Precio (USD):
          {product.price}
        </div>
        <ul className="list">
          <li>
            Categoría:
            {product.category}
          </li>
          <li>
            Descripción:
            {product.description}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetail;
