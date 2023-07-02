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

// TODO: Make the size of each cell dependent on the viewport height and width available

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <OptionsBar />
      <MazeGrid />2
      </ThemeProvider>
    </>
  );
};

export default App;
