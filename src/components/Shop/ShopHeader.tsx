import { Button, Box, Typography } from "@mui/material";
import "../../../src/App.css";
// need to include this kind of stuff
//Home > {Shop} this is called Breadcrumbs
// A breadcrumbs is a list of links that help visualize a page's location within a site's
//hierarchical structure, it allows navigation up to any of the ancestors.
export const ShopHeader = () => {
    return (
        <div
            className="header-shop"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
            }}>
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
        </div>
    );
};
