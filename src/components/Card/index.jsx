import React, { useState } from "react";
import styles from "./Card.module.scss";

function Card({ id, uid, isLiked, isFavorited, title, imageUrl, price, onFavorite, onPlus }) {
  const onClickPlus = () => {
    onPlus({ id, uid, isLiked, isFavorited, title, imageUrl, price });
    //setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, uid, isLiked, isFavorited, title, imageUrl, price });
    //setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        {isLiked ? <img src="./react-sneakers/img/heart-liked.svg" alt="Unliked" /> : <img src="./react-sneakers/img/heart-unliked.svg" alt="Unliked" />}
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} EUR</b>
        </div>

        <img src={isFavorited ? "./react-sneakers/img/checked.svg" : "./react-sneakers/img/plus.svg"} alt="Plus" onClick={onClickPlus} className={styles.plus} />
      </div>
    </div>
  );
}

export default Card;
