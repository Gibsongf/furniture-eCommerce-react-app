import { Box, Card, Divider, Rating, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useContext } from "react";
import { ShoppingCartContext } from "../../App";
export const DescriptionDetails = () => {
  const { selectProduct } = useContext(ShoppingCartContext);
  return (
    <Box
      maxWidth={"100%"}
      //   margin="0 auto"
      className="product review-description container"
      display="flex"
      padding="20px"
      flexDirection="column"
      gap="20px">
      <Typography
        sx={{
          alignSelf: "center",
        }}
        variant="h5"
        component="h1">
        Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
        libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
        vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
        tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
        Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
        leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
      </Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr">
        <img
          srcSet={``}
          src={selectProduct.src[2]}
          alt={"product-1"}
          style={{ maxWidth: "100%" }}
        />
        <img
          srcSet={``}
          src={selectProduct.src[1]}
          alt={"product-2"}
          style={{ maxWidth: "100%" }}
        />
      </Box>
    </Box>
  );
};

const Review = () => {
  return (
    <Card sx={{ padding: "20px", textAlign: "left" }}>
      {" "}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        gap="10px">
        <PersonIcon
          sx={{
            border: "solid black 1px",
            borderRadius: "50%",
            padding: "5px",
          }}
        />

        <Typography variant="subtitle1" component="h5">
          User Name
        </Typography>
      </Box>
      <Rating readOnly name="half-rating" defaultValue={3} precision={1} />
      <Typography>Date review location?</Typography>
      <Typography>
        The review: sem quam semper libero, sit amet adipiscing sem neque sed
        ipsum.
      </Typography>
    </Card>
  );
};
export const ListReview = () => {
  //overall rating value
  //a list of the product review
  // const value = 4; //will receive this from the product info and pass to rating
  // const reviewNum = 10;//total of review
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent={"center"}
      gap="30px"
      padding="20px"
      className="product review side-title">
      <Box>
        <Typography textAlign={"left"} variant="h6" component="h5">
          Customer reviews
        </Typography>
        <Rating
          name="half-rating"
          defaultValue={3}
          precision={1}
          size="large"
          readOnly
        />
        <Typography variant="subtitle1" component="h5">
          10 total ratings
        </Typography>
      </Box>
      <Divider orientation="vertical" />
      <Box>
        <Review />
        <Review />
        <Review />
      </Box>
    </Box>
  );
};
