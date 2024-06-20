import { Box } from "@mui/material";
//breadcrumbs is need here
const DetailsHeader = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            sx={{
                backgroundColor: "#F9F1E7",
                width: "99vw",
                padding: "40px 0px",
            }}>
            Home("#9F9F9F") - Shop("#9F9F9F") - Produto Nome
        </Box>
    );
};
export default DetailsHeader;
