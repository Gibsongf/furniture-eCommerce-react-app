import { Box, Grid, Typography } from "@mui/material";
import { FormContact } from "./FormContact";
import { ContactInfo } from "./Info";
import { ServiceBenefits } from "../Shop/ServiceBenefits";
import { ShopHeader } from "../Shop/ShopHeader";

const HeaderMsg = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems={"center"}>
            <Typography
                width="50%"
                fontWeight={"bold"}
                component="h1"
                variant="h3"
                mb={2}>
                Get In Touch With Us
            </Typography>
            <Typography
                color="#9F9F9F"
                width="50%"
                component="h2"
                variant="h6"
                mb={15}>
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero
            </Typography>
        </Box>
    );
};
export const Contact = () => {
    return (
        <>
            <ShopHeader />
            <Box marginTop="50px" marginBottom="25px">
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <HeaderMsg />
                    </Grid>

                    <Grid item xs={3}>
                        <ContactInfo />
                    </Grid>
                    <Grid item xs={3}>
                        <FormContact />
                    </Grid>
                </Grid>
            </Box>
            <ServiceBenefits />
        </>
    );
};
