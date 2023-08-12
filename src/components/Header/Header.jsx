import React from "react";

function Header() {
  return (
    <header className="header" style={{ background: "red" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <form>
          <input
            type="search"
            placeholder="Buscar produtos"
            className="search__input"
            required
          />

          <button type="submit" className="search__button"></button>
        </form>
      </div>
    </header>
  );
}

export default Header;
