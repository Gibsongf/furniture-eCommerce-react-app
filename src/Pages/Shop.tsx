import { ShopHeader } from "../components/Shop/ShopHeader";
import GridProducts from "../components/Products/GridProducts";
import { pagination } from "../utils";
import { Pagination } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ServiceBenefits } from "../components/Shop/ServiceBenefits";
import { ProductViewAdjuster } from "../components/Shop/ProductViewAdjuster";
import { createContext, useRef, useState, RefObject } from "react";
import { themePaletteColor } from "../components/Theme";

interface ShopContextType {
    itemsPage: string;
    changeItemsCount: (event: string) => void;
    ref: RefObject<HTMLDivElement | undefined>;
}
export const ShopContext = createContext<ShopContextType>(
    {} as ShopContextType
);

export default function Shop() {
    //Specify the type as HTMLDivElement to avoid alert at scrollIntoView
    const ProductViewAdjusterRef = useRef<HTMLDivElement>(null);
    const [itemsPage, setItemPage] = useState("8");
    const [page, setPage] = useState(1);
    const changeItemsCount = (value: string) => {
        setItemPage(value);
        setPage(1);
    };
    const pagesObj = pagination(itemsPage);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        ProductViewAdjusterRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            {" "}
            <ShopHeader />
            {/* need filter or sort by and info of how many items is in the page */}
            <ShopContext.Provider
                value={{
                    itemsPage,
                    changeItemsCount,
                    ref: ProductViewAdjusterRef,
                }}>
                <ProductViewAdjuster />
                <GridProducts
                    itemsPerPage={itemsPage}
                    products={pagesObj[String(page - 1)]}
                />
            </ShopContext.Provider>
            <ThemeProvider theme={themePaletteColor}>
                <Pagination
                    count={Object.keys(pagesObj).length}
                    shape="rounded"
                    page={page}
                    size="large"
                    onChange={handleChange}
                    sx={{
                        "& .MuiPagination-ul": {
                            justifyContent: "center",
                        },
                        margin: "30px",
                    }}
                    color="primary"
                />
            </ThemeProvider>
            <ServiceBenefits />
        </>
    );
}
