import { useState } from 'react'
import Header from '././Components/1-header/Header'
import Hero from './Components/2-hero/Hero'
import Main from './Components/5-main/Main'
import Contact from './Components/6-Contact/Contact'
import Footer from './Components/7-Footer/Footer'
import About from './Components/3-AboutMe/About'
import EduAndExp from './Components/4-EduAndExp/EduAndExp'

function App() {

  return (
    <div className="App">
      <Header />
      {/* <div className="divider"/> */}
      <Hero />
      <div className="divider"/>
      {/* <About /> */}
      <About />
      <div className="divider"/>
      <EduAndExp />
      <div className="divider"/>
      <Main />
      <div className="divider"/>
      <Contact />
      <div className="divider mb-3"/>
      <Footer />
    </div>
  )
}

export default App
