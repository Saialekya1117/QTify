import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider"
import Navbar from "../src/components/Navbar/Navbar.jsx"

function App() {
  return (
    <StyledEngineProvider>
      <Navbar />
    </StyledEngineProvider>
  );
}

export default App;
