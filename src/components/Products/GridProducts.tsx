import { Product, ProductCard } from "./ProductCard";
import { Box } from "@mui/material";

export default function GridProducts({ products }: { products: Product[] }) {
    const moreProducts: JSX.Element[] = Array(8)
        .fill(0)
        .map((n, index) => {
            // const { name, price, src, description } = products[0];
            return (
                // <Box>
                <ProductCard key={index} product={products[index % 2]} />
                // {/* </Box> */}
            );
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
