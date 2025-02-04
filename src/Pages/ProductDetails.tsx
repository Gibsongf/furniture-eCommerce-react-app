import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import DetailsHeader from "../components/ProductDetails/Header";
import Information from "../components/ProductDetails/Information";
import BasicTabs from "../components/ProductDetails/TabInfo";
import { pagination } from "../utils";
import GridProducts from "../components/Products/GridProducts";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../App";

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
// will receive 4 src img
const SideImages = () => {
    // add selection for a change of image that is the focus
    return (
        <>
            <Stack direction={"column"} spacing={8} width={"15%"}>
                <img
                    style={{
                        borderRadius: "10px",
                        border: "solid 5px  #FFF3E3",
                    }}
                    srcSet={``}
                    src={"../src/assets/Home/product-1.png"}
                    alt={"product-1"}
                    // onMouseEnter={{ border: "s5px black" }}
                />
                <img
                    style={{ borderRadius: "10px" }}
                    srcSet={``}
                    src={"../src/assets/Home/product-1.png"}
                    alt={"product-2"}
                />
                <img
                    style={{ borderRadius: "10px" }}
                    srcSet={``}
                    src={"../src/assets/Home/product-1.png"}
                    alt={"product-3"}
                />
            </Stack>
            <img
                style={{ borderRadius: "10px", width: "65%" }}
                srcSet={``}
                src={"../src/assets/Home/product-1.png"}
                alt={"product-3"}
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
            <DetailsHeader name={selectProduct.name} />
            <Box
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
