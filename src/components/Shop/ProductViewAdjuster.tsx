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
    <Box display="flex" alignItems="center" gap="4px">
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
          fontWeight: "bold",
          border: "none",
          fontSize: "1.2rem",
          padding: "4px",
          color: "#9F9F9F",
        }}
        disableUnderline>
        <MenuItem value={"8"}>8</MenuItem>
        <MenuItem value={"16"}>16</MenuItem>
        <MenuItem value={"32"}>32</MenuItem>
      </Select>
    </Box>
  );
}

function SortBy() {
  const { sortBy, setSortBy } = useContext(ShopContext);

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
  };
  return (
    <Box display="flex" alignItems="center" gap="4px">
      <InputLabel sx={{ fontSize: "1.2rem" }} id="sort-by-select-label">
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
          border: "none",
          fontSize: "1.2rem",
          padding: "4px 8px",
          color: "#080303",
        }}
        disableUnderline>
        <MenuItem value={"descending"}>Price: low to high</MenuItem>
        <MenuItem value={"ascending"}>Price: high to low</MenuItem>
      </Select>
    </Box>
  );
}
export function ProductViewAdjuster() {
  const { ref } = useContext(ShopContext);

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: "#F9F1E7",
      }}>
      <Box maxWidth="1200px" padding={"20px"} margin="0 auto">
        <Box
          display="flex"
          alignItems="center"
          gap={"20px"}
          justifyContent={"flex-end"}>
          <ShowItems />
          <SortBy />
        </Box>
      </Box>
    </Box>
  );
}
