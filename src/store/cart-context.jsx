import React from "react";

const CartContext = React.createContext({
  totalAmount: 0,
  addItem: (amount) => {},
  clearCart: () => {},
});

export default CartContext;
