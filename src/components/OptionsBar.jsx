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

const theme = createTheme({
    palette: {
        primary: {
            main: "#64CCC5",
        },
    },
});

function OptionsBar() {
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
                        <AlgoSelector />

                        <div>
                            <AddSelector />
                            <WeightSelector />
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <ThemeProvider theme={theme}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{ marginLeft: 1, marginRight: 1 }}
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
                        <SpeedSelector />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default OptionsBar;
