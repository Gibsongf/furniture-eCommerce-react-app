import { Box, Typography } from "@mui/material";
//breadcrumbs is need here
const DetailsHeader = ({ name }: { name: string }) => {
    return (
        <Box
            alignItems="center"
            sx={{
                backgroundColor: "#F9F1E7",
                width: "99vw",
                padding: "40px 0px",
            }}>
            {/* <Typography variant="h5" component="h5">
                {name}
            </Typography> */}
        </Box>
    );
};
export default DetailsHeader;
