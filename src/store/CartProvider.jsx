import { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [amount, setAmount] = useState(0);

  const addItemToCartHandler = (amount) => {
    setAmount((prev) => prev + amount);
  };

  const clearCartHandler = () => {
    setAmount(0);
  };

  const cartContext = {
    totalAmount: amount,
    addItem: addItemToCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
