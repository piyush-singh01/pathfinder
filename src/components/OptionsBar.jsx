import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import AlgoSelector from "./Selectors/AlgoSelector";
import AddSelector from "./Selectors/AddSelector";
import SpeedSelector from "./Selectors/SpeedSelector";
import WeightSelector from "./Selectors/WeightSelector";

import { GRID_ROWS, GRID_COLS, GRID_VALUE, CELL_STATE, BUTTON_COLOR } from "../utils/constants";

const theme = createTheme({
    palette: {
        primary: {
            main: BUTTON_COLOR,
        },
    },
});

const OptionsBar = ({
    setAlgo,
    setAddEdit,
    setSpeed,
    setWeight,
    isWeightSelected,
    setIsWeightSelected,
    setGrid,
    setGridState,
}) => {

    const handleClearClick = () => {
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
    };

    return (
        <AppBar sx={{ backgroundColor: "#023047" }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "white",
                            textDecoration: "none",
                        }}
                    >
                        Pathfinding Visualizer
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <AlgoSelector setAlgo={setAlgo} />

                        <div>
                            <AddSelector
                                setIsWeightSelected={setIsWeightSelected}
                                setAddEdit={setAddEdit}
                            />
                            <WeightSelector
                                isWeightSelected={isWeightSelected}
                                setWeight={setWeight}
                            />
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <ThemeProvider theme={theme}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{ marginLeft: 1, marginRight: 1 }}
                                    onClick={handleClearClick}
                                >
                                    Clear
                                </Button>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{ marginLeft: 1, marginRight: 1 }}
                                >
                                    Run
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{ marginLeft: 1, marginRight: 1 }}
                                >
                                    Pause
                                </Button>
                            </ThemeProvider>
                        </div>
                        <SpeedSelector setSpeed={setSpeed} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default OptionsBar;
