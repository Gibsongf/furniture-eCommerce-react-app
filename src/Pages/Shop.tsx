import { ShopHeader } from "../components/Shop/ShopHeader";
import GridProducts from "../components/Products/GridProducts";
import { fakeProducts } from "../utils";
import { Pagination, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ServiceBenefits } from "../components/Shop/ServiceBenefits";
import { Product } from "../components/Products/ProductCard";
import { ProductViewAdjuster } from "../components/Shop/ProductViewAdjuster";
import { createContext, Dispatch, SetStateAction, useState } from "react";
const theme = createTheme({
    palette: {
        primary: { main: "#B88E2F" },
    },
});
interface ShopContextType {
    itemsPage: string;
    setItemPage: Dispatch<SetStateAction<string>>;
}
export const ShopContext = createContext<ShopContextType>({
    itemsPage: "",
    setItemPage: () => {},
});

export default function Shop() {
    const moreProducts: Product[] = Array(32)
        .fill(0)
        .map((n, index) => {
            const obj = { ...fakeProducts[index % 2] };
            obj.price += index;
            return obj;
        });
    const [itemsPage, setItemPage] = useState("8");
    return (
        <>
            {" "}
            <ShopHeader />
            {/* need filter or sort by and info of how many items is in the page */}
            <Stack alignItems="center">
                <ShopContext.Provider value={{ itemsPage, setItemPage }}>
                    <ProductViewAdjuster />
                    <GridProducts
                        itemsPerPage={itemsPage}
                        products={moreProducts}
                    />
                    <ThemeProvider theme={theme}>
                        <Pagination
                            count={5}
                            shape="rounded"
                            // page={}
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
                </ShopContext.Provider>

                <ServiceBenefits />
            </Stack>
        </>
    );
}
