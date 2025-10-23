import { useState, useEffect } from "react";
import React from "react";

import Hero from "./Component/About_me/Hero";
import StarRainBackground from "./Component/Home/Star";
import MorphLoader from "./Component/Home/MorphLoader"
import StickySideHUD from "./Component/Home/StickySideHUD";
import AboutMe from "./Component/About_me/AboutMe";
import MyStack from "./Component/About_me/MyStack";
import Expindex from "./Component/Experience/Expindex";
import PersonalProjects from "./Component/Experience/ProjectsIndex";
import { Route, Routes } from "react-router-dom";
import ProjectDetail from "./Component/Experience/ProjectDetail";
import Home from "./Home";
import Footer from "./Component/Home/Footer";
import ScrollToTop from "./Component/ScrollTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3500); // Change duration as needed
    return () => clearTimeout(timeout);
  }, []);

  return (
    loading ?
      <MorphLoader />
      :
      <>
        {/* Global Star Background */}
        <ScrollToTop />
        <StarRainBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

      <Footer />
      </>
  );
}

export default App;
