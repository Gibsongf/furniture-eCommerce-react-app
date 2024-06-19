import { Box, TextField, Typography } from "@mui/material";

export const FormBill = () => {
    const style = {
        "& .MuiOutlinedInput-root": { borderRadius: "8px", padding: "8px" },
        "& .MuiInputLabel-root": { top: "8px" },
    };
    return (
        <Box
            component="form"
            autoComplete="off"
            display="flex"
            flexDirection="column"
            gap="30px"
            // alignItems="center"
            // width="50%"
        >
            <legend>
                <Typography
                    textAlign={"left"}
                    fontWeight={"bold"}
                    variant="h4"
                    component="h1">
                    Billing details
                </Typography>
            </legend>
            <Box display="flex" gap="20px">
                <TextField sx={style} id="first-name" label="First Name" />
                <TextField sx={style} id="last-name" label="Last Name" />
            </Box>
            <TextField
                sx={style}
                id="company-name"
                label="Company Name (Optional)"
                fullWidth
            />
            <TextField sx={style} id="country-region" label="County / Region" />
            <TextField sx={style} id="street-address" label="Street address" />
            <TextField sx={style} id="town-city" label="Town / City" />

            <TextField sx={style} id="zip-code" label="ZIP code" />
            <TextField sx={style} id="phone" label="Phone" />
            <TextField
                sx={style}
                id="email-address"
                type="email"
                label="Email address"
            />
        </Box>
    );
};
