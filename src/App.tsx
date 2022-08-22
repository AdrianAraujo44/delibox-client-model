import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import {light as lightTheme} from  './themes/light'
import Root from "./routes"

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
