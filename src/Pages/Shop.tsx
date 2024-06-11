import { ShopHeader } from "../components/Shop/ShopHeader";
import GridProducts from "../components/Products/GridProducts";
import { fakeProducts } from "../utils";
import { Pagination, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ServiceBenefits } from "../components/Shop/ServiceBenefits";
import { Product } from "../components/Products/ProductCard";
import { SortBy } from "../components/Shop/SortBy";
const theme = createTheme({
    palette: {
        primary: { main: "#B88E2F" },
    },
});

export default function Shop() {
    const moreProducts: Product[] = Array(8)
        .fill(0)
        .map((n, index) => {
            const obj = { ...fakeProducts[index % 2] };
            obj.price += index;
            return obj;
        });

    return (
        <>
            {" "}
            <ShopHeader />
            {/* need filter or sort by and info of how many items is in the page */}
            <Stack alignItems="center">
                <SortBy />
                <GridProducts products={moreProducts} />
                <ThemeProvider theme={theme}>
                    <Pagination
                        count={5}
                        shape="rounded"
                        size="large"
                        sx={{
                            "& .MuiPagination-ul": {
                                justifyContent: "center",
                            },
                            marginBottom: "30px",
                        }}
                        color="primary"
                    />
                </ThemeProvider>

                <ServiceBenefits />
            </Stack>
        </>
    );
}
