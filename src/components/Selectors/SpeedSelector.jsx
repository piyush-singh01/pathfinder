import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const SpeedSelector = () => {
    return (
        <>
            <FormControl
                variant="outlined"
                sx={{
                    m: 1,
                    minWidth: 100,
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
                        Speed
                    </Typography>
                </InputLabel>
                <Select
                    labelId="test-select-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="Speed"
                    sx={{ color: "white" }}
                    defaultValue = ""
                >
                    <MenuItem value="slow">Slow</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="fast">Fast</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default SpeedSelector;
