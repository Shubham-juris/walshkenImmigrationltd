import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
