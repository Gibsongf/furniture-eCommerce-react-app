import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  Breadcrumbs,
} from "@mui/material";
import Information from "../components/ProductDetails/Information";
import BasicTabs from "../components/ProductDetails/TabInfo";
import { pagination } from "../utils";
import GridProducts from "../components/Products/GridProducts";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../App";
import { Link } from "react-router-dom";
const ProductImages = ({ src }: { src: string[] }) => {
  const [mainImg, setMainImg] = useState(0);
  return (
    <>
      <Box
        className="container"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          columnGap: "15px",
        }}>
        <Box
          component="img"
          maxWidth={"100%"}
          src={src[mainImg]}
          sx={{
            borderRadius: "10px",
            gridColumn: "2",
            gridRow: "1/-1",
          }}
          alt={"product-0"}
        />
        <Box
          gridColumn={"1"}
          display="flex"
          gap="10px"
          flexDirection={"column"}>
          {src.map((url: string, index: number) => {
            return (
              <Box
                sx={{
                  borderRadius: "5px",
                  border: "2px solid transparent",
                  "&:hover": { border: "#cfb16a solid 2px" },
                }}
                maxWidth={"100%"}
                component="img"
                src={url}
                alt={`product-${index}`}
                key={index}
                onClick={() => {
                  setMainImg(index);
                }}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

const DetailsHeader = ({ name }: { name: string }) => {
  return (
    <Breadcrumbs
      sx={{
        padding: "20px 0px 40px 0px",
        gridColumn: "1/-1",
      }}
      aria-label="breadcrumb">
      <Link color="inherit" to="/">
        Home
      </Link>
      <Link color="inherit" to="/shop">
        Shop
      </Link>
      <Typography sx={{ color: "text.primary" }}>{name}</Typography>
    </Breadcrumbs>
  );
};
export function ProductDetails() {
  const product = pagination("4");
  const { selectProduct } = useContext(ShoppingCartContext);

  return (
    <>
      <Box
        className="product-details container"
        maxWidth="1200px"
        margin="0 auto">
        <Box
          display="grid"
          gridTemplateColumns={"1fr 1fr"}
          justifyContent="space-between"
          columnGap="40px"
          padding="20px">
          <DetailsHeader name={selectProduct.name} />

          <ProductImages src={selectProduct.src} />
          <Information />
        </Box>
        <Divider orientation="horizontal" flexItem />
        <BasicTabs />
        <Divider orientation="horizontal" flexItem />

        <Typography fontWeight={"bold"} variant="h4" component="h1">
          More Products
        </Typography>
        <GridProducts products={product[0]} itemsPerPage="4" />
      </Box>
    </>
  );
}
