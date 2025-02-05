import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import DetailsHeader from "../components/ProductDetails/Header";
import Information from "../components/ProductDetails/Information";
import BasicTabs from "../components/ProductDetails/TabInfo";
import { pagination } from "../utils";
import GridProducts from "../components/Products/GridProducts";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../App";

// will receive 4 src img
const SideImages = ({ src }: { src: string[] }) => {
    // add selection for a change of image that is the focus
    const [mainImg, setMainImg] = useState(0);
    return (
        <>
            <Stack direction={"column"} spacing={8} width={"15%"}>
                {src.map((url: string, index: number) => {
                    return (
                        <Box
                            sx={{
                                borderRadius: "10px",
                                "&:hover": { border: "#B88E2F solid 3px" },
                            }}
                            component="img"
                            src={url}
                            alt={`product-${index}`}
                            key={index}
                            onClick={() => {
                                setMainImg(index);
                            }}
                        />
                    );
                })}
            </Stack>

            <Box
                component="img"
                src={src[mainImg]}
                sx={{ borderRadius: "10px", width: "65%" }}
                alt={"product-0"}
            />
        </>
    );
};
const getSelectedProduct = () => {
    const storedProduct = localStorage.getItem("selected-product");
    let detailsProduct = {
        name: "null",
        price: "null",
        description: "null",
    };

    // Parse and assign only if storedProduct exists
    if (storedProduct) {
        detailsProduct = JSON.parse(storedProduct);
    }
    return detailsProduct;
};
export function ProductDetails() {
    const product = pagination("4");
    const { selectProduct } = useContext(ShoppingCartContext);

    // {img1, img2, img3, img4,resumedInfo?, full Info?}

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="20px"
                marginBottom="30px">
                <DetailsHeader name={selectProduct.name} />

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
                        <SideImages src={selectProduct.src} />
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
                <GridProducts products={product[0]} itemsPerPage="4" />
            </Box>
        </>
    );
}
