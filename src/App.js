// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import SecondLayer from "./components/SecondLayer";
import ThirdLayer from "./components/ThirdLayer";
import FourthLayer from "./components/FourthLayer";
import FifthLayer from "./components/FifthLayer";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <SecondLayer />
      <ThirdLayer />
      <FourthLayer />
      <FifthLayer />
      <Footer />
    </div>
  );
}

export default App;
