import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import { SPEED_SELECT } from "../../utils/constants";

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
                    labelId="speed-select-label"
                    id="speed-select-id"
                    autoWidth
                    label="Speed"
                    sx={{ color: "white" }}
                    defaultValue={SPEED_SELECT.DEFAULT}
                >
                    <MenuItem value={SPEED_SELECT.SLOW}>Slow</MenuItem>
                    <MenuItem value={SPEED_SELECT.NORMAL}>Normal</MenuItem>
                    <MenuItem value={SPEED_SELECT.FAST}>Fast</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default SpeedSelector;
