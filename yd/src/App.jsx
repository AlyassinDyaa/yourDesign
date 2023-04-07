import React  from 'react'

import NAV from "./nav/Nav"
import HEAD from "./components/Header/header"
import ABOUT from "./components/About/about"
import CANVAS from "./components/Canvas/canvas"
import FOOTER from "./components/Footer/footer"

const App = () => {
  return (
    <>
        <NAV/>
        <HEAD/>
        <ABOUT/>
        <CANVAS/>
        <FOOTER/>
    </>
   
  )
}

export default App
