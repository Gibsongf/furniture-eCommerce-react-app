// import { Typography, Box, Stack } from "@mui/material";
import { ShopHeader } from "../components/Shop/ShopHeader";
import GridProducts from "../components/Products/GridProducts";
import { fakeProducts } from "../utils";
import { Box, Pagination, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
const theme = createTheme({
    palette: {
        primary: { main: "#B88E2F" },
    },
});

const QualityInfo = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            sx={{
                backgroundColor: "#F9F1E7",
                width: "100vw",
                height: "100px",
                padding: "20px",
            }}>
            <Box display="flex" gap={1} alignItems="center">
                <EmojiEventsOutlinedIcon sx={{ fontSize: 50 }} />
                <Box textAlign="left">
                    <Typography
                        fontWeight="bold"
                        variant="subtitle1"
                        component="h2">
                        High Quality
                    </Typography>
                    <Typography
                        color="#898989"
                        variant="subtitle1"
                        component="h2">
                        Maecenas tellus eget
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" gap={1} alignItems="center">
                <VerifiedOutlinedIcon sx={{ fontSize: 50 }} />
                <Box textAlign="left">
                    <Typography
                        fontWeight="bold"
                        variant="subtitle1"
                        component="h2">
                        Warranty Protection
                    </Typography>
                    <Typography
                        color="#898989"
                        variant="subtitle1"
                        component="h2">
                        Donec vitae sapien
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" gap={1} alignItems="center">
                <CardGiftcardOutlinedIcon sx={{ fontSize: 50 }} />
                <Box textAlign="left">
                    <Typography
                        fontWeight="bold"
                        variant="subtitle1"
                        component="h2">
                        Free Shipping
                    </Typography>
                    <Typography
                        color="#898989"
                        variant="subtitle1"
                        component="h2">
                        Maecenas tellus eget
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" gap={1} alignItems="center">
                <SupportAgentOutlinedIcon sx={{ fontSize: 50 }} />
                <Box textAlign="left">
                    <Typography
                        fontWeight="bold"
                        variant="subtitle1"
                        component="h2">
                        24 / 7 Support
                    </Typography>
                    <Typography
                        color="#898989"
                        variant="subtitle1"
                        component="h2">
                        Maecenas tellus eget
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
export default function Shop() {
    return (
        <>
            {" "}
            <ThemeProvider theme={theme}>
                <ShopHeader />
                {/* need filter or sort by and info of how many items is in the page */}
                <GridProducts products={fakeProducts} />
                <Pagination
                    count={5}
                    shape="rounded"
                    size="large"
                    sx={{
                        "& .MuiPagination-ul": {
                            justifyContent: "center",
                        },
                        marginBottom: "30px",
                    }}
                    color="primary"
                />
                <QualityInfo />
            </ThemeProvider>
        </>
    );
}
