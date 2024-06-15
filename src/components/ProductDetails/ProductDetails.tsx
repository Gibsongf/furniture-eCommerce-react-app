import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import DetailsHeader from "./Header";
import Information from "./Information";
import BasicTabs from "./TabInfo";
import { pagination } from "../../utils";
import GridProducts from "../Products/GridProducts";

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
        <Stack direction={"column"} spacing={8} width={"15%"}>
            <Image
                src={"./src/assets/Home/product-1.png"}
                title={"product-1"}
            />
            <Image
                src={"./src/assets/Home/product-1.png"}
                title={"product-2"}
            />
            <Image
                src={"./src/assets/Home/product-1.png"}
                title={"product-3"}
            />
        </Stack>
    );
};
export function ProductDetails() {
    const product = pagination("4");

    return (
        <>
            <DetailsHeader />
            <Box
                padding="20px 150px 20px 150px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="20px"
                marginBottom="30px">
                <Grid
                    container
                    justifyContent="space-evenly"
                    marginBottom="30px"
                    marginLeft="0">
                    <Grid
                        item
                        xs={5}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: "50px",
                        }}>
                        <SideImages />
                        <img
                            style={{ borderRadius: "10px", width: "65%" }}
                            srcSet={``}
                            src={"./src/assets/Home/product-1.png"}
                            alt={"product-3"}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Information />
                    </Grid>
                </Grid>
                <Divider orientation="horizontal" flexItem />
                <BasicTabs />
                <Divider orientation="horizontal" flexItem />

                <Typography fontWeight={"bold"} variant="h4" component="h1">
                    More Products
                </Typography>
                <GridProducts products={product["0"]} itemsPerPage="4" />
                <Divider orientation="horizontal" flexItem />
            </Box>
        </>
    );
}
