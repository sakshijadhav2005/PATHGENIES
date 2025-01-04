import { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MCQ_P from './Pages/MCQ_P';
function App() {
  return (
  <>
  
 <Router>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
            <Route path="/mcq_p" element={<MCQ_P />} />
           </Routes>

        </Router>
  </>
  );
}

export default App;