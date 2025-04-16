import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Pages/HomePage/Hero";
import AboutHeroSection from "./Pages/AboutPage/AboutHeroSection";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutHeroSection />} />
    </Routes>
  );
};

export default AppRouter;
