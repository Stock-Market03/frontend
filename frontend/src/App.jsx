import { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';  
import Home from './Components/Home';
import Stocks from './Components/Stocks';
import AdminPage from './Components/AdminPage';

function App() {

  return (
    <Router>
       <CssBaseline /> {/* Removes default margin and applies global CSS reset */}
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} /> {/* ✅ new route */}
        <Route path="/admin" element={<AdminPage />} />
       
      </Routes>
    </Router>
  )
}

export default App