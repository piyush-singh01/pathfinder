import React from "react";
import { TextField } from "@mui/material";

const WeightSelector = ({ isWeightedSelected, setIsWeightSelected }) => {
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
                disabled={!isWeightedSelected}
            />
        </>
    );
};

export default WeightSelector;
