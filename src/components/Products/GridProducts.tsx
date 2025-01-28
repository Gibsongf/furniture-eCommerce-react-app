import { useContext, useState } from "react";
import { Product, ProductCard } from "./ProductCard";
import { Box } from "@mui/material";
import { ShopContext } from "../../Pages/Shop";
import { mergeSort } from "../../mergeSort";

export default function GridProducts({
    products,
    itemsPerPage,
}: {
    products: Product[];
    itemsPerPage: string;
}) {
    const { sortBy } = useContext(ShopContext);
    const sortedProducts = mergeSort(products, sortBy);
    const ProductCardsArray = sortedProducts?.map((product, index) => {
        if (index < Number(itemsPerPage)) {
            return <ProductCard key={index} product={product} />;
        }
    });
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr));",
                rowGap: "35px",
                width: "90%",
                justifyItems: "center",
            }}>
            {ProductCardsArray}
        </Box>
    );
}
