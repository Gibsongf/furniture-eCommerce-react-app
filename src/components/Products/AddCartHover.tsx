import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { themeAddCartHover } from "../Theme";

export const AddToCart = ({ display }: { display: string }) => {
    // on click action to add to cart and update nums of product
    return (
        <div
            style={{
                display: display,
                position: "absolute",
                backgroundColor: "rgba(58, 58, 58, 0.5)",
                width: "100%",
                height: "100%",
                zIndex: "2",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <ThemeProvider theme={themeAddCartHover}>
                <Button disableElevation={true} variant="text">
                    Add to cart
                </Button>
            </ThemeProvider>
        </div>
    );
};
