import { useContext } from "react"
import { DeliveryContext } from "../contexts/delivery"

export const useDeliveryInfo = () => {
  const context = useContext(DeliveryContext)

  return context
}