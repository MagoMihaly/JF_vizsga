import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import './App.css'
import Home from "./components/Home";
import About from "./components/About";


function App() {
  return (
    <>
      <NavBar />
      <div className="mt-5 " id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
