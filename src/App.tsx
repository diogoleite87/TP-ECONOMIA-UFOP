import GlobalStyled from "./styles/global"
import { BrowserRouter } from "react-router-dom"

import Header from "./components/Header"
import { Footer } from "./components/Footer"
import { Router } from "./router"

function App() {

  return (
    <BrowserRouter>
      <GlobalStyled />

      <Header />

      <Router />

      <Footer />

    </BrowserRouter>
  )
}

export default App
