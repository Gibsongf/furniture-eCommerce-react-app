import { Box, Typography } from "@mui/material";

export const DescriptionDetails = () => {
    //receive the description
    return (
        <Box
            width={"80%"}
            display="flex"
            flexDirection="column"
            gap="20px"
            padding="15px">
            <Typography textAlign="left" variant="h6" component="h1">
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
            <Box display="flex" justifyContent="space-evenly">
                <img
                    srcSet={``}
                    src={"./src/assets/Home/product-1.png"}
                    alt={"product-1"}
                />
                <img
                    srcSet={``}
                    src={"./src/assets/Home/product-1.png"}
                    alt={"product-2"}
                />
            </Box>
        </Box>
    );
};
// Mikaela
// 5.0 out of 5 stars Simple and practical
// Reviewed in the United States on May 21, 2024
// Color: Warm WhiteVerified Purchase
// I love the look of these nightlights - they’re are not such an eyesore and are hardly noticeable in the wall, yet are nice looking when noticed. I love the soft light they give off and the dimming feature they have that matches the darkness of the room. Perfect for bathrooms and hallways.
// One person found this helpful
// const AdditionalInformation = () => {};
const Review = () => {
    return (
        <Box>
            {" "}
            <Typography>User Name</Typography>
            <Typography>Rating</Typography>
            <Typography>Date review location?</Typography>
            <Typography>The review</Typography>
        </Box>
    );
};
export const ListReview = () => {
    return (
        <ul>
            <li>
                <Review />
            </li>
            <li>
                <Review />
            </li>
            <li>
                <Review />
            </li>
        </ul>
    );
};
