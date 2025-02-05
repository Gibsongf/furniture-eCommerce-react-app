import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//breadcrumbs is need here
const DetailsHeader = ({ name }: { name: string }) => {
    return (
        // <Box
        //     alignItems="center"
        // >
        // {/* <Typography variant="h5" component="h5">
        //     {name}
        // </Typography> */}
        // could make a grid with this as the first row and the product img and info in the second to align it properly
        <Breadcrumbs
            sx={{
                // width: "100%",
                alignSelf: "flex-start",
                padding: "40px 0px",
                marginLeft: "150px",
            }}
            aria-label="breadcrumb">
            <Link color="inherit" to="/">
                Home
            </Link>
            <Link color="inherit" to="/shop">
                Shop
            </Link>
            <Typography sx={{ color: "text.primary" }}>{name}</Typography>
        </Breadcrumbs>
        // </Box>
    );
};
export default DetailsHeader;
