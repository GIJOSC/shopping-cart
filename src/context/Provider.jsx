import React, { useState } from "react";
import propTypes from "prop-types";
import AppContext from "./AppContext";

function Provider({ children }) {
  const [name, setName] = useState("Testando ...");

  const value = {
    name,
    setName,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;

Provider.proptypes = {
  children: propTypes.any,
}.isRequired;
