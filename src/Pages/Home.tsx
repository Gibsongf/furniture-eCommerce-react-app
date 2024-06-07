import { Typography, Box, Stack } from "@mui/material";
import { Banner } from "../components/Home/Banner";
import { Categories } from "../components/Home/HomeCategory";
import GridProducts, { Product } from "../components/Products/GridProducts";

const BrowseRange = () => {
    return (
        <Box marginTop="30px" marginBottom="30px">
            <Typography fontWeight="bold" variant="h5" component="h2">
                Browse The Range
            </Typography>
            <Typography fontWeight="lighter" variant="h6" component="h3">
                Suspendisse suscipit neque metus, a malesuada justo fermentum
                non.
            </Typography>
        </Box>
    );
};

const fakeData: Product[] = [
    {
        name: "Syltherine",
        src: "src/assets/Home/product-1.png",
        description: "Stylish cafe chair",
        price: 100,
        newProduct: true,
    },
    {
        name: "Syltherine",
        src: "src/assets/Home/product-1.png",
        description: "Stylish cafe chair",
        price: 100,
        discount: "-50%",
    },
];
export default function Home() {
    return (
        <>
            <Banner />
            <Stack alignItems="center">
                <BrowseRange />
                <Categories />
                <Typography
                    margin={5}
                    fontWeight={"bold"}
                    variant="h4"
                    component="h1">
                    Our Products
                </Typography>
                <GridProducts products={fakeData} />
            </Stack>
        </>
    );
}
