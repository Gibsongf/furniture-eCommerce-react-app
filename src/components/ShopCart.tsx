import { useMemo, useState } from "react";

export interface Product {
    name: string;
    price: number;
    src: string;
    quantity: number;
    discount?: string;
    total?: number;
}
// Specify the type for the state
type ProductState = {
    [key: string]: Product;
};

export const useCart = () => {
    const [products, setProducts] = useState<ProductState>({});
    const [detailsProduct, setDetailsProducts] = useState({});
    const addProduct = (product: Product) => {
        console.log(product);
        setProducts((prev) => {
            console.log(prev);
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
    const SaveDetailsProduct = (product: Product) => {
        setDetailsProducts(product);
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
        SaveDetailsProduct,
        detailsProduct,
    };
    //sum function that sum all product with their values quantity and apply discount
};
