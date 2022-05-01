import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">E-shop</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" />
          <span>{props.cartItems.length !== 0 ? props.cartItems.map((el) => el.price).reduce((a, b) => a + b, 0) : 0} EUR</span>
        </li>
        <li>
          <Link to="favorites">
            <img width={18} height={18} src="/img/heart.svg" />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
