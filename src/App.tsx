import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Box, ThemeProvider, createMuiTheme } from "@material-ui/core";
import CurrentView from "./components/CurrentView";
import gCurrentTheme from "./globals/gCurrentTheme";

import { skip } from "rxjs/operators";
import WelcomeModal from "./components/WelcomeModal";

function App() {
  const [theme, setTheme] = useState(createMuiTheme());
  gCurrentTheme.pipe(skip(1)).subscribe({
    next: (theme) => {
      setTheme(theme);
    },
  });
  return (
    <div className="App">
      <WelcomeModal></WelcomeModal>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box maxWidth={"100%"}>
          <CurrentView />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
