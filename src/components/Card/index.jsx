import React, { useState } from "react";
import styles from "./Card.module.scss";

function Card({ product, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const onAddCart = () => {
    addToCart(product);
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={product.imageUrl} alt="Sneakers" />
      <h5>{product.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{product.price} EUR</b>
        </div>

        <img src={isAdded ? "/img/checked.svg" : "/img/plus.svg"} alt="Plus" onClick={onAddCart} className={styles.plus} />
      </div>
    </div>
  );
}

export default Card;
