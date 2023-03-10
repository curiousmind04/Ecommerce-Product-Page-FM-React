import { useContext } from "react";

import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";

function Cart({ onHideCart }) {
  const cartCtx = useContext(CartContext);

  const hideCartHandler = () => {
    onHideCart();
  };

  const deleteItemsHandler = () => {
    cartCtx.clearCart();
  };

  const checkoutHandler = () => {
    alert("Proceed to checkout?");
    cartCtx.clearCart();
    hideCartHandler();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={hideCartHandler}></div>
      <div className={classes.container}>
        <div className={classes.title}>
          <span>Cart</span>
        </div>
        {cartCtx.totalAmount < 1 && (
          <div className={classes.empty}>
            <p>Your cart is empty.</p>
          </div>
        )}
        {cartCtx.totalAmount > 0 && (
          <div className={classes.filled}>
            <div className={classes.details}>
              <div className={classes.thumbnail}>
                <img
                  src="/images/image-product-1-thumbnail.jpg"
                  alt="product thumbnail"
                />
              </div>
              <div className={classes.item}>
                <p>Fall Limited Edition Sneakers</p>
                <div>
                  <span className={classes.calculation}>
                    {`$125.00 x ${cartCtx.totalAmount} `}
                  </span>
                  <span className={classes.total}>
                    {`$${cartCtx.totalAmount * 125}.00`}
                  </span>
                </div>
              </div>
              <div className={classes.delete} onClick={deleteItemsHandler}>
                <img src="/images/icon-delete.svg" alt="delete icon" />
              </div>
            </div>
            <button onClick={checkoutHandler}>Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
