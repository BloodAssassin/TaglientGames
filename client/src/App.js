import "./App.css";
import React from "react";
import { Helmet } from "react-helmet";

// Components
import Navigation from "./components/Navigation";
import Gameplay from "./components/Gameplay";
import Footer from "./components/Footer";
import Games from "./components/Games";
import Contact from "./components/Contact";
import About from "./components/About";

// Responsive
import "./css/responsive.css";

function App() {
  return (
    <div className="App">
        <Helmet>
        <title>Taglient Games</title>
        <meta name="description" content="Indie game development studio." />
        <meta property="og:site_name" content="Taglient Games" />
        <meta property="og:title" content="Taglient Games" />
        <meta name="twitter:title" content="Taglient Games" />
      </Helmet>

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
