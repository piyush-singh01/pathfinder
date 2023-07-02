import React, { useState } from "react";
import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import MazeGrid from "./components/MazeGrid";
import OptionsBar from "./components/OptionsBar";
import "@fontsource/roboto/300.css";

import { ALGO_SELECT, ADD_EDIT_SELECT, SPEED_SELECT } from "./utils/constants";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

// TODO: Make the size of each cell dependent on the viewport height and width available

const App = () => {
    const [algo, setAlgo] = useState(ALGO_SELECT.DEFAULT);
    const [addEdit, setAddEdit] = useState(ADD_EDIT_SELECT.DEFAULT);
    const [speed, setSpeed] = useState(SPEED_SELECT.DEFAULT);
    const [weight, setWeight] = useState(1);
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <OptionsBar setAlgo={setAlgo} setAddEdit={setAddEdit} setSpeed={setSpeed} setWeight={setWeight} />
                <MazeGrid />
            </ThemeProvider>
        </>
    );
};

export default App;
