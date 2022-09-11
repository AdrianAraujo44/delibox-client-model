import { createContext } from 'react'
import { io } from 'socket.io-client'
const apiURL = import.meta.env.VITE_API_URL

export const socket = io(`${apiURL}`)
export const SocketContext = createContext(socket)