import { Box, Divider, Grid, Stack } from "@mui/material";
import DetailsHeader from "./Header";
import Information from "./Information";
import BasicTabs from "./TabInfo";

const Image = ({ title, src }: { title: string; src: string }) => {
    return (
        <img
            style={{ borderRadius: "10px" }}
            srcSet={``}
            src={src}
            alt={title}
        />
    );
};
const SideImages = () => {
    return (
        <Stack direction={"column"} spacing={8} width={"15%"}>
            <Image
                src={"./src/assets/Home/product-1.png"}
                title={"product-1"}
            />
            <Image
                src={"./src/assets/Home/product-1.png"}
                title={"product-2"}
            />
            <Image
                src={"./src/assets/Home/product-1.png"}
                title={"product-3"}
            />
        </Stack>
    );
};
export function ProductDetails() {
    return (
        <>
            <DetailsHeader />
            <Grid
                container
                justifyContent="center"
                marginBottom="30px"
                marginLeft="0"
                columnSpacing={10}>
                {/* <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                        }}
                        item
                        xs={2}>
                        <SideImages />
                    </Grid> */}
                <Grid
                    item
                    xs={5}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "50px",
                    }}>
                    <SideImages />
                    <img
                        style={{ borderRadius: "10px", width: "90%" }}
                        srcSet={``}
                        src={"./src/assets/Home/product-1.png"}
                        alt={"product-3"}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Information />
                </Grid>
            </Grid>
            <Divider orientation="horizontal" flexItem />
            <BasicTabs />
        </>
    );
}
