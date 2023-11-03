import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact"




function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/gallery" exact element={<Gallery />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/contact" exact element={<Contact />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
