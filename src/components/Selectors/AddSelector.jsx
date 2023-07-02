import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const AddSelector = () => {

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
                        Add/Edit
                    </Typography>
                </InputLabel>
                <Select
                    labelId="test-select-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="Add/Edit"
                    sx={{ color: "white" }}
                    defaultValue = ""
                >
                    <MenuItem value="source">Source</MenuItem>
                    <MenuItem value="obstacles">Obstacles</MenuItem>
                    <MenuItem value="destination">Destination</MenuItem>
                    <MenuItem value="weighted-cells">Weighted Cells</MenuItem>
                    <MenuItem value="checkpoints">Checkpoints</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default AddSelector;
