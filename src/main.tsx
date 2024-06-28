import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./components/Contact/Contact.tsx";
import Shop from "./Pages/Shop.tsx";
import Home from "./Pages/Home.tsx";
import { ProductDetails } from "./Pages/ProductDetails.tsx";
import Cart from "./Pages/Cart.tsx";
import { CheckOut } from "./components/Checkout/Checkout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "contact", element: <Contact /> },
            {
                path: "product/id",
                element: <ProductDetails />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "cart",
                element: <Cart />,
                children: [{ path: "checkout", element: <CheckOut /> }],
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
