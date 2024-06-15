import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useRef, useState } from "react";
import { AddToCart } from "./AddCartHover";
import { CircleBadge } from "./CicleCardBadge";
import Zoom from "@mui/material/Zoom";

export interface Product {
    name: string;
    price: number;
    src: string;
    description: string;
    newProduct?: boolean;
    discount?: string;
}

//a discount circle cor red with percentage of it
//a new circle color

export function ProductCard({ product }: { product: Product }) {
    const [showAddCart, setShowAddCart] = useState<string>("none");
    const [hover, setHover] = useState(false);
    const onMouseEnter = () => {
        setShowAddCart("flex");
        setHover(true);
    };
    const onMouseOut = () => {
        setShowAddCart("none");
        setHover(false);
    };
    const { name, price, src, description, newProduct, discount } = product;
    return (
        <Card
            sx={{
                border: "black solid 1px",
                backgroundColor: "#F4F5F7",
                borderRadius: "0px",
                width: "90%",
                position: "relative",
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseOut}>
            <AddToCart display={showAddCart} />
            <CircleBadge isNew={newProduct} value={discount} />

            <img style={{ width: "100%" }} src={src} alt="title" srcSet="" />
            <CardContent sx={{ textAlign: "left" }}>
                <Typography fontWeight="bold" variant="h4" component="h1">
                    {name.replace(name[0], name[0].toUpperCase())}
                </Typography>
                <Typography color="#898989" variant="h6" component="h2">
                    {description}
                </Typography>
                <Typography fontWeight="bold" variant="h5" component="h1">
                    R${price}
                </Typography>
            </CardContent>
        </Card>
    );
}
