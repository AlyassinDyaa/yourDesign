import React  from 'react'

import NAV from "./nav/Nav"
import SOCIAL from "./social/social"

import HEAD from "./components/Header/header"
import ABOUT from "./components/About/about"
import CANVAS from "./components/Canvas/canvas"
import CONTACT from "./components/Contact/contact"
import FOOTER from "./components/Footer/footer"

const App = () => {
  return (
    <>
        <NAV/>
        <SOCIAL/>
        <HEAD/>
        <ABOUT/>
        <CANVAS/>
        <CONTACT/>
        <FOOTER/>
    </>
   
  )
}

export default App
