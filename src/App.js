import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Support from "./components/Support";
import SupportDetails from "./components/SupportDetails";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <AboutUs />
      <Support />
      <SupportDetails />
      <Pricing />
      <Footer/>
    </div>
  );
};

export default App;
