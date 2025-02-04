import { useEffect, useState } from "react";
import { Product } from "./Products/ProductCard";
// Specify the type for the state
type ProductState = {
    [key: string]: Product;
};
const emptyProduct = {
    name: "",
    src: "",
    price: 0,
    description: "",
    quantity: 0,
};

export const useCart = () => {
    const [products, setProducts] = useState<ProductState>({});
    const [selectProduct, setSelectProduct] = useState<Product>(emptyProduct);

    const [iconQuantity, setIconQuantity] = useState(0);
    const addProduct = (product: Product) => {
        setProducts((prev) => {
            if (prev[product.name]) {
                return { ...prev };
            }
            return {
                ...prev,
                [product.name]: product,
            }; // key is the product name, value is the Product object
        });
        // need to add total of current product?
        // if it has a discount we apply now ?

        return;
    };
    const updateProduct = (
        name: string,
        key: string,
        value: string | number
    ) => {
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
    const removeProduct = (name: string) => {
        setProducts(() => {
            delete products[name];
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
        selectProduct,
        setSelectProduct,
    };
    //sum function that sum all product with their values quantity and apply discount
};
