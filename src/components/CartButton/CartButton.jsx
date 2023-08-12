import React from "react";
import { BsCartCheck } from "react-icons/bs";
import "./CartButton.css";

function CartButton() {
  return (
    <button type="button" className="cart__button">
      <BsCartCheck />
    </button>
  );
}

export default CartButton;
