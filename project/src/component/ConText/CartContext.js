import { createContext, useState } from "react";

export const CartContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({ he: "hellow" });

  return (
    <CartContext.Provider value={{ theme, setTheme }}>
      {children}
    </CartContext.Provider>
  );
}
