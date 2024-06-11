import { Typography, Box, Stack } from "@mui/material";
// import * as React from 'react';
// import Box from '@mui/material/Box';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export function SortBy() {
    const [opt, setOpt] = useState("default");

    const handleChange = (event: SelectChangeEvent) => {
        setOpt(event.target.value as string);
    };
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            sx={{
                backgroundColor: "#F9F1E7",
                width: "100%",
                paddingTop: "10px",
                paddingBottom: "10px",
            }}>
            <InputLabel
                sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                id="demo-simple-select-label">
                Sort By
            </InputLabel>
            <Select
                size="medium"
                variant="standard"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={opt}
                label="Sort By"
                onChange={handleChange}
                sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    backgroundColor: "white",
                    margin: "10px",
                    marginRight: "30px",
                    fontWeight: "bold",
                    border: "none",
                    fontSize: "1.2rem",
                    padding: "15px",
                }}
                disableUnderline>
                <MenuItem value={"default"}>Default</MenuItem>
                <MenuItem value={"low"}>Price: low to high</MenuItem>
                <MenuItem value={"high"}>Price: high to low</MenuItem>
                <MenuItem value={"new"}>New</MenuItem>
            </Select>
        </Box>
    );
}
