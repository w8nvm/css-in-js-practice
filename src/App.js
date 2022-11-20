import React from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//pages
import Home from './pages/Home';
import Signup from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import NotFound from './pages/NotFound'


function App() {
  return (
    <Router>
        <GlobalStyle/>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/pricing" element={<Pricing/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  );
}

export default App;
