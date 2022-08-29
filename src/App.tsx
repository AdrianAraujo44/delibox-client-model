import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { light as lightTheme } from './themes/light'
import Root from "./routes"
import { CartProvider } from "./contexts/cart"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { DeliveryProvider } from "./contexts/delivery"
import { socket, SocketContext } from "./contexts/socket"

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <DeliveryProvider>
        <SocketContext.Provider value={socket}>
          <CartProvider>
            <BrowserRouter>
              <Root />
            </BrowserRouter>
          </CartProvider>
        </SocketContext.Provider>
      </DeliveryProvider>
      <ToastContainer theme="colored" />
    </ThemeProvider>
  )
}

export default App
