import React, { useState, useEffect } from "react";
import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import MazeGrid from "./components/MazeGrid";
import OptionsBar from "./components/OptionsBar";
import "@fontsource/roboto/300.css";

import {
    GRID_ROWS,
    GRID_COLS,
    ALGO_SELECT,
    ADD_EDIT_SELECT,
    SPEED_SELECT,
    CELL_STATE,
    GRID_VALUE
} from "./utils/constants";

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

    const [isWeightSelected, setIsWeightSelected] = useState(false);

    const [currSource, setCurrSource] = useState([-1, -1]);
    const [currDestination, setCurrDestination] = useState([-1, -1]);

    const [currCheckpoint1, setCurrCheckpoint1] = useState([-1, -1]);
    const [currCheckpoint2, setCurrCheckpoint2] = useState([-1, -1]);

    const [grid, setGrid] = useState([]);
    const [gridState, setGridState] = useState([]);

    //Grid containing values and Grid State containing demarkation

    useEffect(() => {
        const initialGrid = [];
        const initialState = [];
        for (let r = 0; r < GRID_ROWS; r++) {
            initialGrid[r] = [];
            initialState[r] = [];
            for (let c = 0; c < GRID_COLS; c++) {
                initialGrid[r][c] = GRID_VALUE.BLANK;
                initialState[r][c] = CELL_STATE.BLANK;
            }
        }
        setGrid(initialGrid);
        setGridState(initialState);
    }, []);

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <OptionsBar
                    setAlgo={setAlgo}
                    setAddEdit={setAddEdit}
                    setSpeed={setSpeed}
                    weight={weight}
                    setWeight={setWeight}
                    isWeightSelected={isWeightSelected}
                    setIsWeightSelected={setIsWeightSelected}
                    setCurrSource={setCurrSource}
                    setCurrDestination={setCurrDestination}
                    setCurrCheckpoint1={setCurrCheckpoint1}
                    setCurrCheckpoint2={setCurrCheckpoint2}
                    grid={grid}
                    setGrid={setGrid}
                    gridState={gridState}
                    setGridState={setGridState}
                />
                <MazeGrid
                    algo={algo}
                    addEdit={addEdit}
                    speed={speed}
                    weight={weight}
                    currSource={currSource}
                    currDestination={currDestination}
                    setCurrSource={setCurrSource}
                    setCurrDestination={setCurrDestination}
                    currCheckpoint1={currCheckpoint1}
                    setCurrCheckpoint1={setCurrCheckpoint1}
                    currCheckpoint2={currCheckpoint2}
                    setCurrCheckpoint2={setCurrCheckpoint2}
                    grid={grid}
                    setGrid={setGrid}
                    gridState={gridState}
                    setGridState={setGridState}
                />
            </ThemeProvider>
        </>
    );
};

export default App;
