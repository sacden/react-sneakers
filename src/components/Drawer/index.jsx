import styles from "./Drawer.module.scss";

function Drawer({ setIsOpened, cartItems }) {
  return (
    <div className="overlay">
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Cart <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" onClick={() => setIsOpened(false)} />
        </h2>
        <div className={styles.items}>
          {cartItems.map((product) => {
            return (
              <div className="cartItem d-flex align-center mb-20" key={product.id}>
                <div style={{ backgroundImage: `url(${product.imageUrl})` }} className="cartItemImg"></div>

                <div className="mr-20 flex">
                  <p className="mb-5">{product.title}</p>
                  <b>{product.price} EUR</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
              </div>
            );
          })}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>{cartItems.length !== 0 ? cartItems.map((el) => el.price).reduce((a, b) => a + b, 0) : 0} EUR</b>
            </li>
            <li>
              <span>VAT 5%:</span>
              <div></div>
              <b>{cartItems.length !== 0 ? (cartItems.map((el) => el.price).reduce((a, b) => a + b, 0) * 0.05).toFixed(2) : 0} EUR </b>
            </li>
          </ul>
          <button className="greenButton">
            Buy <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
