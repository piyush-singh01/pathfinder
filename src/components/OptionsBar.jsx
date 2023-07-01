import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import AlgoSelector from "./AlgoSelector";

const pages = ["Select Algorithm", "Add Obstacle", "Add Destination "];

function OptionsBar() {
  return (
    <AppBar sx={{backgroundColor:"#023047"}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
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

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent:"space-between"}}>
            <AlgoSelector />
            <AlgoSelector />
            <AlgoSelector />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default OptionsBar;
