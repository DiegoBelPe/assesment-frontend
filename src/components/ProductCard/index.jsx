import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import './ProductCard.css';

function ProductCard({ id, title, image }) {
  const [countdown, setCountdown] = useState(true);

  const handlerCompleted = () => {
    setCountdown(false);
  };

  return (
    <div className="card">
      <Link
        className={countdown ? 'link__active' : 'link__inactive'}
        to={`/ProductDetail/${id}`}
      >
        <img className="imagecard" src={image} alt="" />
        <p className="titleproduct">{title}</p>
        <Countdown
          className="countdown"
          date={Date.now() + parseInt(Math.random() * 300000, 10)}
          onComplete={handlerCompleted}
        />
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
};

ProductCard.defaultProps = {
  image: '',
  title: '',
  id: 0,
};

export default ProductCard;
