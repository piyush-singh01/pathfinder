import React from "react";
import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import MazeGrid from "./components/MazeGrid";
import OptionsBar from "./components/OptionsBar";
import "@fontsource/roboto/300.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <OptionsBar />
      <MazeGrid />
      </ThemeProvider>
    </>
  );
};

export default App;
