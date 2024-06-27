import { createContext, useState } from "react";

export const CartContext = createContext();

export function ThemeProviderConfig({ children }) {
  const [theme, setTheme] = useState({ hello: "hello" });
  console.log("quandosmkxmksl:", theme.hello);

  return (
    <CartContext.Provider value={{ theme, setTheme }}>
      {children}
    </CartContext.Provider>
  );
}
