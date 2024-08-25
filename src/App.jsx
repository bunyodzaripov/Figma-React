import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Blog from "./components/blog";
import Works from "./components/works";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/works" element={<Works />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
