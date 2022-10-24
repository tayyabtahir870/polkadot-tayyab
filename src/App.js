import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Home from "./Pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Layouts/Base";
import Technology from "./Pages/Technology";
import Community from "./Pages/Community";
import Aboutpage from "./Pages/Aboutpage";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Build from "./Pages/Build";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/technology" element={<Technology/>} />
            <Route index path="/community" element={<Community/>} />
            <Route index path="/aboutpage" element={<Aboutpage/>} />
            <Route index path="/contact" element={<Contact/>} />
            <Route index path="/build" element={<Build/>} />
            <Route index path="/blog" element={<Blog/>} />
          
            
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
