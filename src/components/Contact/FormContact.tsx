import { Box, Button, TextField, ThemeProvider } from "@mui/material";
import { themeBanner, themePaletteColor } from "../Theme";

export function FormContact() {
    return (
        <Box
            component="form"
            autoComplete="off"
            display="flex"
            flexDirection="column"
            gap="40px"
            // alignItems="center"
            // width="50%"
        >
            <ThemeProvider theme={themePaletteColor}>
                <TextField label="Your Name" />
                <TextField label="Email address" type="email" />
                <TextField label="Subject" />
                <TextField label="Message" multiline rows={4} />
            </ThemeProvider>
            {/* <ThemeProvider theme={themeBanner}>
                <Button
                    className="submit-contact"
                    sx={{ padding: "6px 8px" }}
                    variant="text">
                    Submit
                </Button>
            </ThemeProvider> */}
        </Box>
    );
}
