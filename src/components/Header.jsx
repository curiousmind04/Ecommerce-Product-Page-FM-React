import { useState, useContext } from "react";

import Cart from "./Cart";
import classes from "./Header.module.css";
import Menu from "./Menu";
import CartContext from "../store/cart-context";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartCtx = useContext(CartContext);

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  const onHideMenu = () => {
    setShowMenu(false);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };

  const onHideCart = () => {
    setShowCart(false);
  };

  return (
    <header>
      {showMenu && <Menu onHideMenu={onHideMenu} />}
      {showCart && <Cart onHideCart={onHideCart} />}
      <div className={classes.top}>
        <div className={classes.hamburger}>
          <img
            src="/images/icon-menu.svg"
            alt="hamburger-icon"
            onClick={showMenuHandler}
          />
        </div>
        <div>
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <ul className={classes.menu}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <div className={classes.cart}>
          {cartCtx.totalAmount > 0 && (
            <div className={classes.badge}>{cartCtx.totalAmount}</div>
          )}
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={showCartHandler}
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
        </div>
        <div className={classes.avatar}>
          <img src="/images/image-avatar.png" alt="avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
