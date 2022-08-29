import { useContext } from "react"
import { SocketContext } from "."

export const useSocket = () => {
  const context = useContext(SocketContext)

  return context
}