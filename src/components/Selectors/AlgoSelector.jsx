import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import { ALGO_SELECT } from "../../utils/constants";

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
                    labelId="algo-select-label"
                    id="algo-select-id"
                    autoWidth
                    label="Algorithm"
                    sx={{ color: "white" }}
                    defaultValue={ALGO_SELECT.DEFAULT}
                >
                    <MenuItem value={ALGO_SELECT.A_STAR}>A*</MenuItem>
                    <MenuItem value={ALGO_SELECT.DIJKSTRA}>Dijkstra</MenuItem>
                    <MenuItem value={ALGO_SELECT.BFS}>BFS</MenuItem>
                    <MenuItem value={ALGO_SELECT.DFS}>DFS</MenuItem>
                    <MenuItem value={ALGO_SELECT.GREEDY_BEST_FIRST}>Greedy Best First</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default AlgoSelector;
