import React from "react";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  return (
    <div>
      <h3 className="text-center text-2xl font-bold">Order Summery</h3>
      <h4 className="text-xl mt-2 font-bold">Order itemed: {cart.length}</h4>
      <h4 className="text-xl mt-2 font-bold">Total: {total}</h4>
    </div>
  );
};

export default Cart;
