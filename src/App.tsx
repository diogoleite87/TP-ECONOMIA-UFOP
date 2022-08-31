import GlobalStyled from "./styles/global"
import { BrowserRouter } from "react-router-dom"

import Header from "./components/Header"
import { Router } from "./router"

function App() {

  return (
    <BrowserRouter>
      <GlobalStyled />
      <header>
        <Header />
      </header>
      <body>
        <Router />
      </body>
      <footer>

      </footer>
    </BrowserRouter>
  )
}

export default App
