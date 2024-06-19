import { Grid } from "@mui/material";
import { ShopHeader } from "../Shop/ShopHeader";
import { FormBill } from "./FormBillInfo";
import { PlaceOrder } from "./PlaceOrder";

export const CheckOut = () => {
    return (
        <>
            <ShopHeader />
            <Grid
                container
                justifyContent="center"
                marginTop="80px"
                marginBottom="80px">
                <Grid
                    item
                    xs={5}
                    sx={{ display: "flex", justifyContent: "center" }}>
                    <FormBill />
                </Grid>
                <Grid item xs={5}>
                    <PlaceOrder />
                </Grid>
            </Grid>
        </>
    );
};
