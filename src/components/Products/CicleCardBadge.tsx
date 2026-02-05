import { Box, Typography } from "@mui/material";

interface CircleBadge {
  isNew: boolean | undefined;
  value: string | number | undefined;
}
export const CircleBadge = ({ isNew, value }: CircleBadge) => {
  let color: string = "#2EC1AC";
  let text: string | number = "New";
  if (value && !isNew) {
    color = "#E97171";
    text = `-${value}%`;
  } else if (!value && !isNew) return;
  return (
    // <Box
    //     display="flex"
    //     justifyContent="flex-end"
    //     sx={{ width: "100%", zIndex: "1", position: "relative" }}>
    <Box
      className="card-discount"
      display="flex"
      alignItems="center"
      justifyContent=" center"
      sx={{
        width: "48px",
        height: "48px",
        backgroundColor: color,
        position: "absolute",
        zIndex: "1",
        borderRadius: "50%",
        margin: "15px",
        padding: "3px",
        color: "white",
        boxShadow: "0px 3px 2px 0px black",
        // left: "290px",
      }}>
      <Typography variant="h6" component="h4">
        {text}
      </Typography>
    </Box>
    // </Box>
  );
};
