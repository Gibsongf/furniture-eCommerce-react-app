import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography } from "@mui/material";

const Title = ({ text }: { text: string }) => {
    return (
        <Typography
            fontWeight={"bold"}
            gridColumn="2"
            textAlign="left"
            variant="h5"
            component="h6">
            {text}
        </Typography>
    );
};
const Content = ({ text, row = 2 }: { text: string; row?: number }) => {
    return (
        <Typography textAlign="left" width="50%" gridRow={row} gridColumn="2">
            {text}
        </Typography>
    );
};
export const ContactInfo = () => {
    const iconStyle = {
        fill: "black",
        gridRow: 1,
        gridColumn: "1",
        textAlign: "right",
        justifySelf: "end",
        fontSize: "25px",
        alignSelf: "center",
    };
    const boxGrid = {
        display: "grid",
        gridTemplateColumns: "50px 1fr",
        width: "100%",
        columnGap: "30px",
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
            }}>
            <Box sx={boxGrid}>
                <LocationOnIcon sx={iconStyle} />
                <Title text="Address" />
                <Content text="23 Etiam rhoncusnisi. Nam eget dui" />
            </Box>
            <Box sx={boxGrid}>
                <LocalPhoneIcon sx={iconStyle} />
                <Title text="Phone" />
                <Content text="Mobile: +(11) (11) 111-1111" />
                <Content row={3} text="Hotline: +(11) 111-1111" />
            </Box>
            <Box sx={boxGrid}>
                <AccessTimeFilledIcon sx={iconStyle} />
                <Title text="Working Time" />
                <Content text="Monday-Friday: 9:00 - 22:00" />
                <Content row={3} text="Saturday-Sunday: 9:00 - 21:00" />
            </Box>
        </Box>
    );
};
