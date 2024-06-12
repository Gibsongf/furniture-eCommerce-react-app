import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext, useState } from "react";
import { ShopContext } from "../../Pages/Shop";

function ShowItems() {
    const { itemsPage, changeItemsCount } = useContext(ShopContext);
    const [show, setShow] = useState<string>(itemsPage);
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
                    padding: "15px",
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
function SortBy() {
    const [sortBy, setSortBy] = useState("alphabetical");

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
                    padding: "15px",
                    color: "#9F9F9F",
                }}
                disableUnderline>
                <MenuItem value={"alphabetical"}>Alphabetical</MenuItem>
                <MenuItem value={"low"}>Price: low to high</MenuItem>
                <MenuItem value={"high"}>Price: high to low</MenuItem>
                <MenuItem value={"new"}>New</MenuItem>
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
                width: "100%",
                paddingTop: "10px",
                paddingBottom: "10px",
                marginBottom: "45px",
            }}>
            <ShowItems />
            <SortBy />
        </Box>
    );
}
