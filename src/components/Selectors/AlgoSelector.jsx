import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const AlgoSelector = () => {
    return (
        <>
            <FormControl
                variant="outlined"
                sx={{
                    m: 1,
                    minWidth: 120,
                    fontFamily: "monospace",
                    ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "lightgrey",
                    },
                    span: {
                        color: "white",
                    },
                }}
            >
                <InputLabel id="test-select-label" sx={{ color: "white" }}>
                    <Typography display="block" gutterBottom>
                        Algorithm
                    </Typography>
                </InputLabel>
                <Select
                    labelId="test-select-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="Algorithm"
                    sx={{ color: "white" }}
                    defaultValue=""
                >
                    <MenuItem value="Astar">A*</MenuItem>
                    <MenuItem value="Dijkstra">Djikstra</MenuItem>
                    <MenuItem value="BFS">BFS</MenuItem>
                    <MenuItem value="DFS">DFS</MenuItem>
                    <MenuItem value="GBS">Greedy Best First</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default AlgoSelector;
