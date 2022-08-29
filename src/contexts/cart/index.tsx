import { useState } from "react";
import { createContext } from "react";
import { ICart, ICartProvider} from "./types";

export const CartContext = createContext<ICart>({} as ICart)

export const CartProvider = ({children}: ICartProvider) => {
  const [cart, setCart] = useState<any>([])

  return (
    <CartContext.Provider value={{cart, setCart}} >
      {children}
    </CartContext.Provider>
  )
}