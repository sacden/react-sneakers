import React, { useState } from "react";
import styles from "./Card.module.scss";

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, isLiked }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        {isFavorite ? <img src="/img/heart-liked.svg" alt="Unliked" /> : <img src="/img/heart-unliked.svg" alt="Unliked" />}
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} EUR</b>
        </div>

        <img src={isAdded ? "/img/checked.svg" : "/img/plus.svg"} alt="Plus" onClick={onClickPlus} className={styles.plus} />
      </div>
    </div>
  );
}

export default Card;
