import classes from "./Header.module.css";
import Menu from "./Menu";

function Header() {
  return (
    <header>
      <Menu />
      <div>
        <div className={classes.hamburger}>
          <img src="/images/icon-menu.svg" alt="hamburger-icon" />
        </div>
        <div>
          <img src="/images/logo.svg" alt="logo" />
        </div>
      </div>
      <div>
        <div className={classes.cart}>
          <img src="/images/icon-cart.svg" alt="cart icon" />
        </div>
        <div className={classes.avatar}>
          <img src="/images/image-avatar.png" alt="avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
