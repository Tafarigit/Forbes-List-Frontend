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
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";

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
          <Route path="gifts/:id" element={<Show />}/>
          <Route path="/gifts/:id/edit" element={<Edit />} />
        </Routes>
        </main>
        </Router>
      </div>
   
  );
}

export default App;
