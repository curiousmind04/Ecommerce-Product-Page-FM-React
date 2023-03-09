import classes from "./Menu.module.css";

function Menu() {
  return (
    <>
      <div className={classes.backdrop}></div>
      <div className={classes.container}>
        <img src="/images/icon-close.svg" alt="close icon" />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
