import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Box, Container, Paper, ThemeProvider, createMuiTheme } from "@material-ui/core";
import CurrentView from "./components/CurrentView";
import { orange, green, blue, red, common } from "@material-ui/core/colors";
import gCurrentTheme from "./globals/gCurrentTheme";

import { skip } from "rxjs/operators";

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },

    background: {
      default: "red",
      paper: "red",
    },
    common: {
      white: "red",
    },
  },
});

function App() {
  const [theme, setTheme] = useState(createMuiTheme());
  gCurrentTheme.pipe(skip(1)).subscribe({
    next: (theme) => {
      setTheme(theme);
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />

        <Box maxHeight={"100%"} minHeight={"75vh"}>
          <CurrentView />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
