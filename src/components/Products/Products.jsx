import React, { useState, useEffect } from "react";

import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts("notebook").then((response) => {
      setProducts(response);
      console.log(products);
    });
  }, []);

  console.log(products);

  return (
    <section className="products container">
      <Loading />
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </section>
  );
}

export default Products;
