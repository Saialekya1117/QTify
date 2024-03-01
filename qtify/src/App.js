import logo from "./logo.svg";
// import './App.css';
import Navbar from "../src/components/Navbar/Navbar";
import HomePage from "./pages/homePage";
import { StyledEngineProvider } from "@mui/material";

import AlbumContainer from "./components/AlbumContainer/AlbumContainer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <StyledEngineProvider>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </StyledEngineProvider>
  );
}

export default App;

//{textLine1,textLine2,image}