import { Grid } from "@mui/material";
import { ShopHeader } from "../Shop/ShopHeader";
import { FormBill } from "./FormBillInfo";
import { PlaceOrder } from "./PlaceOrder";

export const CheckOut = () => {
    return (
        <>
            <ShopHeader pageName="CheckOut" />
            <Grid container justifyContent="center" margin="60px 0px">
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
