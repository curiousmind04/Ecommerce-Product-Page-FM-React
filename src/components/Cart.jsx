import classes from "./Cart.module.css";

function Cart({ onHideCart }) {
  const hideCartHandler = () => {
    onHideCart();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={hideCartHandler}></div>
      <div className={classes.container}>
        <div className={classes.title}>
          <span>Cart</span>
        </div>
        <div className={classes.info}>
          <p>Your cart is empty.</p>
        </div>
      </div>
    </>
  );
}

export default Cart;
