import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import AboutUs from './components/AboutUs'
import Support from './components/Support'
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Hero/>
      <AboutUs/>
      <Support/>
    </div>
  )
}

export default App