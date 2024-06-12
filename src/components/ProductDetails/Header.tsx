import { Box } from "@mui/material";
const DetailsHeader = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            sx={{
                backgroundColor: "#F9F1E7",
                width: "100%",
                paddingTop: "50px",
                paddingBottom: "10px",
                marginBottom: "45px",
            }}>
            Home("#9F9F9F") - Shop("#9F9F9F") - Produto Nome
        </Box>
    );
};
export default DetailsHeader;
