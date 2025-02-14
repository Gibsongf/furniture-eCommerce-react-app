import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { Box, Typography } from "@mui/material";

export const ServiceBenefits = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            sx={{
                backgroundColor: "#F9F1E7",
                width: "99vw",
                height: "100px",
                padding: "20px 0px",
            }}>
            <Box display="flex" gap={1} alignItems="center">
                <EmojiEventsOutlinedIcon sx={{ fontSize: 70 }} />
                <Box textAlign="left">
                    <Typography
                        fontWeight="bold"
                        variant="subtitle1"
                        component="h2">
                        Nullam quis
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
                <VerifiedOutlinedIcon sx={{ fontSize: 70 }} />
                <Box textAlign="left">
                    <Typography
                        fontWeight="bold"
                        variant="subtitle1"
                        component="h2">
                        Maecenas nec
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
                <CardGiftcardOutlinedIcon sx={{ fontSize: 70 }} />
                <Box textAlign="left">
                    <Typography
                        fontWeight="bold"
                        variant="subtitle1"
                        component="h2">
                        Aenean imperdiet
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
                <SupportAgentOutlinedIcon sx={{ fontSize: 70 }} />
                <Box textAlign="left">
                    <Typography
                        fontWeight="bold"
                        variant="subtitle1"
                        component="h2">
                        Etiam rhoncus
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
