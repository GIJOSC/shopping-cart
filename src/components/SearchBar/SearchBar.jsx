import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./SearchBar.css";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    alert("teste");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
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
