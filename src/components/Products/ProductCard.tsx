import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { AddToCart } from "./AddCartHover";

export interface Product {
    name: string;
    price: number;
    src: string;
    description: string;
    new?: string;
    discount?: string;
}

//a discount circle cor red with percentage of it
//a new circle color

export function ProductCard({ src, name, description, price }: Product) {
    const [showAddCart, setShowAddCart] = useState<string>("none");
    return (
        <Card
            sx={{
                border: "black solid 1px",
                backgroundColor: "#F4F5F7",
                borderRadius: "0px",
                width: "90%",
                position: "relative",
            }}
            onMouseEnter={() => setShowAddCart("flex")}
            onMouseLeave={() => setShowAddCart("none")}>
            <AddToCart display={showAddCart} />
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
