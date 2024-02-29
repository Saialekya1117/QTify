import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import Hero from "../src/components/Hero/Hero.jsx"

function App() {
  return (
    <StyledEngineProvider>
      <Navbar />
      <Hero />
    </StyledEngineProvider>
  );
}

export default App;
