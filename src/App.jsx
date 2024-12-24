import "./App.css";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Page.jsx/Home";
import Wallet from "./Page.jsx/Wallet";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/wallet" element={<Wallet/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
