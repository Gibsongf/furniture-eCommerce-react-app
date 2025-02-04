import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { ShopAddToCart } from "./AddCartHover";
import { CircleBadge } from "./CicleCardBadge";

export interface Product {
    name: string;
    price: number;
    src: string[];
    description: string;
    quantity: number;
    preview?: string;
    newProduct?: boolean;
    discount?: number;
    total?: number;
}

//a discount circle cor red with percentage of it
//a new circle color

export function ProductCard({ product }: { product: Product }) {
    const [showAddCart, setShowAddCart] = useState<boolean>(false);
    const onMouseEnter = () => {
        setShowAddCart(true);
    };
    const onMouseOut = () => {
        setShowAddCart(false);
    };
    const { name, price, src, preview, newProduct, discount } = product;
    return (
        <Card
            sx={{
                backgroundColor: "#F4F5F7",
                borderRadius: "0px",
                width: "90%",
                position: "relative",
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseOut}
            elevation={0}>
            <ShopAddToCart show={showAddCart} product={product} />
            <CircleBadge isNew={newProduct} value={discount} />

            <img style={{ width: "100%" }} src={src[0]} alt="title" srcSet="" />
            <CardContent sx={{ textAlign: "left" }}>
                <Typography fontWeight="bold" variant="h4" component="h1">
                    {name.replace(name[0], name[0].toUpperCase())}
                </Typography>
                <Typography color="#898989" variant="h6" component="h2">
                    {preview}
                </Typography>
                <Typography fontWeight="bold" variant="h5" component="h1">
                    R${price}
                </Typography>
            </CardContent>
        </Card>
    );
}
