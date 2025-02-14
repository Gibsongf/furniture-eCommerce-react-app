import { useState } from "react";
import { Product } from "./Products/ProductCard";
// Specify the type for the state
type ProductState = {
    [key: string]: Product;
};
const emptyProduct: Product = {
    name: "",
    src: [],
    price: 0,
    description: "",
    quantity: 0,
};

export const useCart = () => {
    const [products, setProducts] = useState<ProductState>({});
    const [selectProduct, setSelectProduct] = useState<Product>(emptyProduct);

    const [iconQuantity, setIconQuantity] = useState(0);
    const addProduct = (product: Product) => {
        if (products[product.name]) {
            return;
        }
        setProducts((prev) => {
            return {
                ...prev,
                [product.name]: product,
            }; // key is the product name, value is the Product object
        });
        setIconQuantity((prev) => {
            return prev + 1;
        });

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
        if (!products[name]) return;
        setIconQuantity((prev) => {
            return prev - 1;
        });
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
