import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const Context = (props) => {
  const [data, setData] = useState("mixed");

  const allValue = { setData, data };

  return (
    <div>
      <CartContext.Provider value={allValue}>
        {props.children}
      </CartContext.Provider>
    </div>
  );
};
