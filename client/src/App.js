import "./App.css";
import React from "react";
import Navigation from "./components/Navigation";
import Gameplay from "./components/Gameplay";
import Footer from "./components/Footer";
import Games from "./components/Games";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Gameplay />
      <Games />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
