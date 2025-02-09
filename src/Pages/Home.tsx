import { Typography, Box, Stack, Divider } from "@mui/material";
import { Banner } from "../components/Home/Banner";
import { Categories } from "../components/Home/HomeCategory";
import GridProducts from "../components/Products/GridProducts";
import ShareSetupImages from "../components/Home/ShareSetup";
import { pagination } from "../utils";

const BrowseRange = () => {
    return (
        <Box>
            <Typography fontWeight="bold" variant="h5" component="h2">
                Browse The Range
            </Typography>
            <Typography color="#616161" variant="h6" component="h3">
                Suspendisse suscipit neque metus, a malesuada justo fermentum
                non.
            </Typography>
        </Box>
    );
};
const ShareSetup = () => {
    return (
        <Box>
            <Typography color="#616161" variant="h6" component="h1">
                Share your setup with
            </Typography>
            <Typography fontWeight={"bold"} variant="h3" component="h1">
                #DictumFelis
            </Typography>
        </Box>
    );
};

export default function Home() {
    // api call to get product or just fake data
    const pagesObj = pagination("8");

    return (
        <>
            <Banner />
            {/* <Stack alignItems="center" padding="100px"> */}
            <BrowseRange />
            <Categories />
            <Divider flexItem />

            <Typography fontWeight={"bold"} variant="h4" component="h1">
                Our Products
            </Typography>
            <GridProducts products={pagesObj["0"]} itemsPerPage="8" />
            {/* </Stack> */}
            <Divider flexItem />

            <ShareSetup />
            <ShareSetupImages />
        </>
    );
}
