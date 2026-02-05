import { Box, Typography } from "@mui/material";
import "../../../src/App.css";
export const ShopHeader = ({ pageName }: { pageName: string }) => {
  return (
    <Box
      className="header-shop"
      sx={{
        backgroundColor: "rgba(233, 233, 233, 0.6)",
        width: "100%",
        minHeight: "300px",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap={"wrap"}>
      <Typography fontWeight="500" variant="h3" component="h1">
        {pageName}
      </Typography>
    </Box>
  );
};
