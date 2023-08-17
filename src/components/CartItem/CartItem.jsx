import React from "react";

import { LiaCartArrowDownSolid } from "react-icons/lia";

function CartItem() {
  return (
    <section>
      <img src="" alt="Imagem do produto" className="cart-item-image" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">Titulo do Produto</h3>
        <h3 className="cart-item-price">R$ 500,00</h3>
        <button type="button" className="button__remove-item">
          <LiaCartArrowDownSolid />
        </button>
      </div>
    </section>
  );
}

export default CartItem;
