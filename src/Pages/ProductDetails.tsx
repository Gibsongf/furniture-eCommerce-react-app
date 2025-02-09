import {
    Box,
    Divider,
    Grid,
    Stack,
    Typography,
    Breadcrumbs,
} from "@mui/material";
import Information from "../components/ProductDetails/Information";
import BasicTabs from "../components/ProductDetails/TabInfo";
import { pagination } from "../utils";
import GridProducts from "../components/Products/GridProducts";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../App";
import { Link } from "react-router-dom";
// will receive 4 src img
const ProductImages = ({ src }: { src: string[] }) => {
    const [mainImg, setMainImg] = useState(0);
    return (
        <>
            <Stack direction={"column"} spacing={8}>
                {src.map((url: string, index: number) => {
                    return (
                        <Box
                            sx={{
                                borderRadius: "10px",
                                border: "2px solid white",
                                "&:hover": { border: "#B88E2F solid 2px" },
                            }}
                            width={"40%"}
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
                sx={{ borderRadius: "10px", width: "75%" }}
                alt={"product-0"}
            />
        </>
    );
};

const DetailsHeader = ({ name }: { name: string }) => {
    return (
        <Breadcrumbs
            sx={{
                padding: "40px 0px",
            }}
            aria-label="breadcrumb">
            <Link color="inherit" to="/">
                Home
            </Link>
            <Link color="inherit" to="/shop">
                Shop
            </Link>
            <Typography sx={{ color: "text.primary" }}>{name}</Typography>
        </Breadcrumbs>
    );
};
export function ProductDetails() {
    const product = pagination("4");
    const { selectProduct } = useContext(ShoppingCartContext);

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                rowGap="20px"
                marginBottom="30px"
                className="container-product-details"
                width="90%">
                <Grid
                    container
                    justifyContent="space-between"
                    marginBottom="30px"
                    marginLeft="0">
                    <Grid item xs={12}>
                        <DetailsHeader name={selectProduct.name} />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                        }}>
                        <ProductImages src={selectProduct.src} />
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
