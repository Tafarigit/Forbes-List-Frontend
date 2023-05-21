// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Gifts from './Components/Gifts';
// import Home from './Components/Home';
//Components
import Navbar from "./Components/Navbar";

//Pages
import Home from "./Pages/Home";
import New from "./Pages/New";
import Index from "./Pages/Index";

function App() {
  return (
  
      <div className="App">
         <Router>
        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/gifts" element={<Index />}/>
          <Route path="/gifts/new" element={<New />}/>
        </Routes>
        </main>
        </Router>
      </div>
   
  );
}

export default App;
