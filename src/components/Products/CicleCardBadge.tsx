import { Box } from "@mui/material";

const CircleBadge = ({
    bgColor,
    text = "New",
}: {
    bgColor: string;
    text: string;
}) => {
    return (
        <Box
            sx={{
                width: "48px",
                height: "48px",
                backgroundColor: bgColor,
            }}>
            {text}
        </Box>
    );
};
