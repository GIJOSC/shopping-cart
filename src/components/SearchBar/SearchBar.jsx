import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";

import "./SearchBar.css";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const { name } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    const products = await fetchProducts(searchValue);
    console.log(products);
    setSearchValue("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />

      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
