import React from "react";
import propTypes from "prop-types";
import { LiaCartPlusSolid } from "react-icons/lia";

import "./ProductCard.css";
import formatCurrency from "../../utils/formatCurrency";

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w.jpg/gi, "W.jpg")}
        alt="product"
        className="card__Image"
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, "USD")}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="button__add-cart">
        <LiaCartPlusSolid />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.proptypes = {
  data: propTypes.shape({}),
}.isRequired;
