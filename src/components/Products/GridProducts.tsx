import { useContext } from "react";
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
      className="product-grid container"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr));",
        gap: "40px",
        maxWidth: "1200px",
        padding: "20px",

        margin: "0 auto",
        justifyItems: "center",
      }}>
      {ProductCardsArray}
    </Box>
  );
}
