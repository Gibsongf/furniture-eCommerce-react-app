import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext, useState } from "react";
import { ShopContext } from "../../Pages/Shop";

function ShowItems() {
    const { itemsPerPage, changeItemsCount } = useContext(ShopContext);
    const [show, setShow] = useState<string>(itemsPerPage);
    const handleChange = (event: SelectChangeEvent) => {
        setShow(event.target.value as string);
        changeItemsCount(event.target.value as string);
    };
    return (
        <>
            {" "}
            <InputLabel
                sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                id="show-items-label">
                Show
            </InputLabel>
            <Select
                size="medium"
                variant="standard"
                labelId="show-items-select"
                id="show-items-select"
                value={String(show)}
                label="Show"
                onChange={handleChange}
                sx={{
                    boxShadow: "none",
                    backgroundColor: "white",
                    margin: "10px",
                    marginRight: "30px",
                    fontWeight: "bold",
                    border: "none",
                    fontSize: "1.2rem",
                    padding: "10px",
                    color: "#9F9F9F",
                }}
                disableUnderline>
                <MenuItem value={"8"}>8</MenuItem>
                <MenuItem value={"16"}>16</MenuItem>
                <MenuItem value={"32"}>32</MenuItem>
            </Select>
        </>
    );
}
//receive the product and then sort it all type available or per option selection?
function SortBy() {
    const { sortBy, setSortBy } = useContext(ShopContext);

    const handleChange = (event: SelectChangeEvent) => {
        setSortBy(event.target.value as string);
    };
    return (
        <>
            <InputLabel
                sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                id="sort-by-select-label">
                Sort By
            </InputLabel>
            <Select
                size="medium"
                variant="standard"
                labelId="sort-by-select-label"
                id="sort-by-select"
                value={sortBy}
                label="Sort By"
                onChange={handleChange}
                sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    backgroundColor: "white",
                    margin: "10px",
                    marginRight: "50px",
                    fontWeight: "bold",
                    border: "none",
                    fontSize: "1.2rem",
                    padding: "10px",
                    color: "#9F9F9F",
                }}
                disableUnderline>
                <MenuItem value={"descending"}>Price: low to high</MenuItem>
                <MenuItem value={"ascending"}>Price: high to low</MenuItem>
            </Select>
        </>
    );
}
export function ProductViewAdjuster() {
    const { ref } = useContext(ShopContext);

    return (
        <Box
            ref={ref}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            sx={{
                backgroundColor: "#F9F1E7",
                width: "99vw",
                padding: "10px 0px",
                marginBottom: "25px",
                marginTop: "-30px", //stay close to the header ignore stack gap
            }}>
            <Box marginRight="100px" display="flex" alignItems="center">
                <ShowItems />
                <SortBy />
            </Box>
        </Box>
    );
}
