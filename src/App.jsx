import "./App.css";
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import AboutUs from "./Components/AboutUs";
import Product from "./Components/Product";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <AboutUs/>
        <Service/>
        <Product/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
