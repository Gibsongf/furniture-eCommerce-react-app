import { useEffect, useState } from "react";
import { Product } from "./Products/ProductCard";
// Specify the type for the state
type ProductState = {
    [key: string]: Product;
};

export const useCart = () => {
    const [products, setProducts] = useState<ProductState>({});
    const [iconQuantity, setIconQuantity] = useState(0);
    const addProduct = (product: Product) => {
        // console.log(product);
        setProducts((prev) => {
            // console.log(prev);
            if (prev[product.name]) {
                return { ...prev };
            }
            return {
                ...prev,
                [product.name]: product,
            }; // Key is the product name, value is the Product object
        });
        // need to add total of current product?
        //if it has a discount we apply now ?

        return;
    };
    const updateProduct = (name: string, key: string, value) => {
        setProducts((prev) => {
            if (!prev[name]) {
                return prev;
            }
            return {
                ...prev,
                [name]: { ...prev[name], [key]: value },
            };
        });
    };
    const removeProduct = (product: Product) => {
        setProducts(() => {
            delete products[product.name];
            return { ...products };
        });
    };
    return {
        addProduct,
        removeProduct,
        products,
        iconQuantity,
        setIconQuantity,
        updateProduct,
    };
    //sum function that sum all product with their values quantity and apply discount
};
