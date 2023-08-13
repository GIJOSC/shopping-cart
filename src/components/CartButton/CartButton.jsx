import React from "react";
import { BsCartCheck } from "react-icons/bs";
import "./CartButton.css";

function CartButton() {
  return (
    <button type="button" className="cart__button">
      <BsCartCheck />
      <span className="cart-status">1</span>
    </button>
  );
}

export default CartButton;
