import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { Box, Typography } from "@mui/material";

export const ServiceBenefits = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9F1E7",
        // height: "100px",
      }}>
      <Box
        maxWidth={"1200px"}
        display="flex"
        alignItems="center"
        margin="0 auto"
        padding="20px"
        justifyContent="space-between">
        <Box
          className="benefit-container"
          display="flex"
          gap={1}
          alignItems="center">
          <EmojiEventsOutlinedIcon sx={{ fontSize: 70 }} />
          <Box textAlign="left">
            <Typography fontWeight="bold" variant="subtitle1" component="h2">
              Nullam quis
            </Typography>
            <Typography color="#898989" variant="subtitle1" component="h2">
              Maecenas tellus eget
            </Typography>
          </Box>
        </Box>
        <Box
          className="benefit-container"
          display="flex"
          gap={1}
          alignItems="center">
          <VerifiedOutlinedIcon sx={{ fontSize: 70 }} />
          <Box textAlign="left">
            <Typography fontWeight="bold" variant="subtitle1" component="h2">
              Maecenas nec
            </Typography>
            <Typography color="#898989" variant="subtitle1" component="h2">
              Donec vitae sapien
            </Typography>
          </Box>
        </Box>
        <Box
          className="benefit-container hide-benefit"
          display="flex"
          gap={1}
          alignItems="center">
          <CardGiftcardOutlinedIcon sx={{ fontSize: 70 }} />
          <Box textAlign="left">
            <Typography fontWeight="bold" variant="subtitle1" component="h2">
              Aenean imperdiet
            </Typography>
            <Typography color="#898989" variant="subtitle1" component="h2">
              Maecenas tellus eget
            </Typography>
          </Box>
        </Box>
        <Box
          className="benefit-container"
          display="flex"
          gap={1}
          alignItems="center">
          <SupportAgentOutlinedIcon sx={{ fontSize: 70 }} />
          <Box textAlign="left">
            <Typography fontWeight="bold" variant="subtitle1" component="h2">
              Etiam rhoncus
            </Typography>
            <Typography color="#898989" variant="subtitle1" component="h2">
              Maecenas tellus eget
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
