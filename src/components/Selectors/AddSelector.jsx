import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import { ADD_EDIT_SELECT } from "../../utils/constants";

const AddSelector = ({ isWeightedSelected, setIsWeightSelected }) => {
    const handleChange = (e) => {
        if(e.target.value === ADD_EDIT_SELECT.WEIGHTED_CELL) {
            setIsWeightSelected(true);
        } else {
            setIsWeightSelected(false);
        }
    }
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
                    labelId="add-edit-select-label"
                    id="add-edit-select-id"
                    autoWidth
                    label="Add/Edit"
                    sx={{ color: "white" }}
                    defaultValue={ADD_EDIT_SELECT.SOURCE}
                    onChange={handleChange}
                >
                    <MenuItem value={ADD_EDIT_SELECT.SOURCE}>Source</MenuItem>
                    <MenuItem value={ADD_EDIT_SELECT.OBSTACLE}>
                        Obstacles
                    </MenuItem>
                    <MenuItem value={ADD_EDIT_SELECT.DESTINATION}>
                        Destination
                    </MenuItem>
                    <MenuItem value={ADD_EDIT_SELECT.WEIGHTED_CELL}>
                        Weighted Cells
                    </MenuItem>
                    <MenuItem value={ADD_EDIT_SELECT.CHECKPOINT}>
                        Checkpoints
                    </MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default AddSelector;
