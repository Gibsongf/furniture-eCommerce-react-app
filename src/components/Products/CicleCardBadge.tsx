import { Box, Typography } from "@mui/material";
//#2EC1AC new
//#E97171 promo
interface CircleBadge {
    isNew: boolean | undefined;
    value: string | undefined;
}
export const CircleBadge = ({ isNew, value }: CircleBadge) => {
    let color: string = "#2EC1AC";
    let text: string = "New";
    if (value && !isNew) {
        color = "#E97171";
        text = value;
    } else if (!value && !isNew) return;
    return (
        <Box
            display="flex"
            justifyContent="flex-end"
            sx={{ width: "100%", zIndex: "1", position: "relative" }}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent=" center"
                sx={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: color,
                    position: "absolute",
                    zIndex: "1",
                    borderRadius: "50px",
                    margin: "15px",
                    padding: "3px",
                    color: "white",
                    boxShadow: "0px 3px 2px 0px black",
                }}>
                <Typography variant="h6" component="h4">
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};
