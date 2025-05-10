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
    itemsPerPage: string;
    changeItemsCount: (event: string) => void;
    sortBy: string;
    setSortBy: (value: string) => void;
    ref: RefObject<HTMLDivElement | undefined>;
}
export const ShopContext = createContext<ShopContextType>(
    {} as ShopContextType
);

export default function Shop() {
    //specify the type as HTMLDivElement to avoid alert at scrollIntoView
    const ProductViewAdjusterRef = useRef<HTMLDivElement>(null);
    const [itemsPerPage, setItemPage] = useState("8");
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState("descending");
    const changeItemsCount = (value: string) => {
        setItemPage(value);
        setPage(1);
    };
    const pagesObj = pagination(itemsPerPage);
    const handleChange = (
        _event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
        ProductViewAdjusterRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            {" "}
            <ShopHeader pageName="Shop" />
            {/* need filter or sort by and info of how many items is in the page */}
            {/* the sort event should happen at grid product only in the item at the current page*/}
            <ShopContext.Provider
                value={{
                    itemsPerPage,
                    changeItemsCount,
                    ref: ProductViewAdjusterRef,
                    sortBy,
                    setSortBy,
                }}>
                <ProductViewAdjuster />
                <GridProducts
                    itemsPerPage={itemsPerPage}
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
