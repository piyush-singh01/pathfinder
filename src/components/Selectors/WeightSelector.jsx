import React from "react";
import { TextField } from "@mui/material";

const WeightSelector = ({ isWeightSelected, setWeight }) => {
    
    const handleChange = (e) => {
        setWeight(e.target.value);
    }

    return (
        <>
            <TextField
                id="standard-basic"
                label="Weight"
                variant="standard"
                sx={{
                    m: 1,
                    minWidth: 12,
                    fontFamily: "monospace",
                    ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "lightgrey",
                    },
                    width: 50,
                }}
                disabled={!isWeightSelected}
                onChange={handleChange}
            />
        </>
    );
};

export default WeightSelector;
