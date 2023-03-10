import classes from "./Menu.module.css";

function Menu({ onHideMenu }) {
  const hideMenuHandler = () => {
    onHideMenu();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={hideMenuHandler}></div>
      <div className={classes.container}>
        <img
          src="/images/icon-close.svg"
          alt="close icon"
          onClick={hideMenuHandler}
        />
        <ul>
          <li onClick={hideMenuHandler}>Collections</li>
          <li onClick={hideMenuHandler}>Men</li>
          <li onClick={hideMenuHandler}>Women</li>
          <li onClick={hideMenuHandler}>About</li>
          <li onClick={hideMenuHandler}>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
