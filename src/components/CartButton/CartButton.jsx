import React, { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./CartButton.css";
import AppContext from "../../context/AppContext";

function CartButton() {
  const { cartItems } = useContext(AppContext);

  return (
    <button type="button" className="cart__button">
      <HiOutlineShoppingCart />
      <span className="cart-status">{cartItems.length}</span>
    </button>
  );
}

export default CartButton;
