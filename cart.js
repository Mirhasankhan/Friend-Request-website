import React from "react";

const Cart = (props) => {
  return (
    <div>
      <h3>Sent Request: {props.cart.length}</h3>
    </div>
  );
};

export default Cart;