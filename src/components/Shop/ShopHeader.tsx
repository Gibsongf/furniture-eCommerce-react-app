import { Box, Typography } from "@mui/material";
import "../../../src/App.css";
export const ShopHeader = ({ pageName }: { pageName: string }) => {
    return (
        <div
            className="header-shop"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "99vw",
                //to ignore gap of stack in app.tsx
                // paddingTop: "-10px",
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
                    {pageName}
                </Typography>
            </Box>
        </div>
    );
};
