import styles from "./Drawer.module.scss";

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Cart <img className="cu-p" src="img/btn-remove.svg" alt="Remove" onClick={onClose} />
        </h2>
        {items.length > 0 ? (
          <div>
            <div className={styles.items}>
              {items
                .filter((el) => el.isFavorited === true)
                .map((product) => {
                  return (
                    <div className="cartItem d-flex align-center mb-20" key={product.id}>
                      <div style={{ backgroundImage: `url(${product.imageUrl})` }} className="cartItemImg"></div>

                      <div className="mr-20 flex">
                        <p className="mb-5">{product.title}</p>
                        <b>{product.price} EUR</b>
                      </div>
                      <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" onClick={() => onRemove(product)} />
                    </div>
                  );
                })}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>
                    {items.length !== 0
                      ? items
                          .filter((el) => el.isFavorited === true)
                          .map((el) => el.price)
                          .reduce((a, b) => a + b, 0)
                      : 0}{" "}
                    EUR
                  </b>
                </li>
                <li>
                  <span>VAT 5%:</span>
                  <div></div>
                  <b>
                    {items.length !== 0
                      ? (
                          items
                            .filter((el) => el.isFavorited === true)
                            .map((el) => el.price)
                            .reduce((a, b) => a + b, 0) * 0.05
                        ).toFixed(2)
                      : 0}{" "}
                    EUR{" "}
                  </b>
                </li>
              </ul>
              <button className="greenButton">
                Buy <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="d-flex align-center justify-center flex-column flex">
            <img src="img/emptyCart.svg" alt="Empty cart" />
            <h3>Your cart is empty</h3>

            <p className="opacity-6">Please add at least one product to order something.</p>
            <button className="greenButton" onClick={onClose}>
              Go back{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
