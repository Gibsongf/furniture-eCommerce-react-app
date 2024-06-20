import { Box, Card, Divider, Rating, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
export const DescriptionDetails = () => {
    //receive the description
    return (
        <Box
            width={"80%"}
            display="flex"
            flexDirection="column"
            gap="20px"
            padding="15px">
            <Typography
                sx={{
                    alignSelf: "center",
                }}
                textAlign="left"
                variant="h5"
                component="h1">
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                mauris sit amet nibh. Donec sodales sagittis magna. Sed
                consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </Typography>
            <Box display="flex" justifyContent="space-around">
                <img
                    srcSet={``}
                    src={"./src/assets/Home/product-1.png"}
                    alt={"product-1"}
                    style={{ width: "490px", height: "305px" }}
                />
                <img
                    srcSet={``}
                    src={"./src/assets/Home/product-1.png"}
                    alt={"product-2"}
                    style={{ width: "490px", height: "305px" }}
                />
            </Box>
        </Box>
    );
};

// const AdditionalInformation = () => {};
const Review = () => {
    //{username, userReview, dateReview,location?, reviewText}
    return (
        <Card sx={{ margin: "30px", padding: "1rem", textAlign: "left" }}>
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
                        borderRadius: "500px",
                        padding: "5px",
                    }}
                />

                <Typography variant="subtitle1" component="h5">
                    User Name
                </Typography>
            </Box>
            <Rating
                readOnly
                name="half-rating"
                defaultValue={3}
                precision={1}
            />
            <Typography>Date review location?</Typography>
            <Typography>
                The review: sem quam semper libero, sit amet adipiscing sem
                neque sed ipsum.
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
            padding="30px">
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
