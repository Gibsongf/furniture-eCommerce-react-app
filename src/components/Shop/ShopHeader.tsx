import { Button, Box, Typography } from "@mui/material";
import "../../../src/App.css";
const ShopNameHeader = () => {
    return (
        <Box
            sx={{
                backgroundColor: "rgba(233, 233, 233, 0.6)",
                width: "100%",
                height: "100%",
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap={"wrap"}>
            <Typography fontWeight="500" variant="h3" component="h1">
                Shop
            </Typography>
        </Box>
    );
};
export const ShopHeader = () => {
    return (
        <div
            className="header-shop"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
            }}>
            <ShopNameHeader />
        </div>
    );
};
