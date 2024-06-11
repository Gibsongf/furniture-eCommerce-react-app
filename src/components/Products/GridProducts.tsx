import { Product, ProductCard } from "./ProductCard";
import { Box } from "@mui/material";

export default function GridProducts({ products }: { products: Product[] }) {
    const moreProducts: JSX.Element[] = products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
    });
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr));",
                rowGap: "35px",
                padding: "2rem",
                width: "90%",
                justifyItems: "center",
            }}>
            {moreProducts}
        </Box>
    );
}
