import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
