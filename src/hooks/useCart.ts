import { useContext } from "react"
import { CartContext } from "../contexts/cart"

export const useCart = () => {
  const context = useContext(CartContext)

  return context
}