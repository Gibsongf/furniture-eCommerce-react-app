import { Box, Grid, Stack } from "@mui/material";
import { Product } from "../Products/ProductCard";
import DetailsHeader from "./Header";
import Information from "./Information";

const Image = ({ title, src }: { title: string; src: string }) => {
    return (
        <img
            style={{ borderRadius: "10px" }}
            srcSet={``}
            src={src}
            alt={title}
        />
    );
};
const SideImages = () => {
    return (
        <Stack direction={"column"} spacing={8} width={"50%"}>
            <Image
                src={
                    "/home/gibson/Desktop/All Projects/furniture-eCommerce-react-app/src/assets/Home/product-1.png"
                }
                title={"product-1"}
            />
            <Image src={"src/assets/Home/product-1.png"} title={"product-2"} />
            <Image src={"src/assets/Home/product-1.png"} title={"product-3"} />
        </Stack>
    );
};
export function ProductDetails() {
    return (
        <>
            <DetailsHeader />
            <Stack alignItems="center" margin="30px">
                <Grid container>
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                        }}
                        item
                        xs={2}>
                        <SideImages />
                    </Grid>
                    <Grid item xs={5}>
                        <img
                            style={{ borderRadius: "10px", width: "90%" }}
                            srcSet={``}
                            src={"src/assets/Home/product-1.png"}
                            alt={"product-3"}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Information />
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
}
