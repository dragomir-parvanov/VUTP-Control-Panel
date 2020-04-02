import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Box, Container, Paper } from "@material-ui/core";
import CurrentView from "./components/CurrentView";

function App() {
  return (
    <div className="App">
      <Navbar />
     
      <Box maxHeight={"100%"} minHeight={"75vh"}><CurrentView/></Box>
  
    </div>
  );
}

export default App;
