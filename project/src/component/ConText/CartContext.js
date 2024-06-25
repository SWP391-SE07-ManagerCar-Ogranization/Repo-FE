import { createContext, useState } from "react";

export const CartContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({ he: "hellow" });
  console.log("quandosmkxmksl:", theme.heloo);

  return (
    <CartContext.Provider value={{ theme, setTheme }}>
      { }
    </CartContext.Provider>
  );
}
