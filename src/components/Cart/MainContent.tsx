import { Button } from "@mui/base";
import { Box, Grid, Typography } from "@mui/material";

export const CartItems = () => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Box>
                    <Typography>Product</Typography>
                    <Typography>Price</Typography>
                    <Box>
                        <Typography>Quantity</Typography>
                        <Typography>Subtotal</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box>
                    <Typography>Product</Typography>
                    <Typography>Subtotal: R$10000</Typography>
                    <Typography>Total R$10000</Typography>
                    <Button>Check Out</Button>
                </Box>
            </Grid>
        </Grid>
    );
};
