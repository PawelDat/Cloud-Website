import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import AboutUs from './components/AboutUs'
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Hero/>
      <AboutUs/>
    
    </div>
  )
}

export default App