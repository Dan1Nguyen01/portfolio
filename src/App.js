import React, { useEffect } from "react";
import Aos from "aos";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./UI/Hero";
import Services from "./UI/Services";
import Portfolio from "./UI/Portfolio";
import Contact from "./UI/Contact";
const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
