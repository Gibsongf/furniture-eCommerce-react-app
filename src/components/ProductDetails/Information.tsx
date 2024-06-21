import {
    Box,
    Button,
    Divider,
    Rating,
    ThemeProvider,
    Typography,
} from "@mui/material";
import QuantityInput from "./QuantityInput";
import { themeInformation } from "../Theme";

const DetailsAction = () => {
    // add cart on click
    // compare on click

    return (
        <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            flexWrap="wrap"
            width="100%"
            gap="20px">
            <QuantityInput />

            <ThemeProvider theme={themeInformation}>
                <Button variant="outlined" type="text">
                    Add To Cart
                </Button>
                <Button variant="outlined" type="text">
                    Compare
                </Button>
            </ThemeProvider>
        </Box>
    );
};
const Information = () => {
    // {name, value, overallRating, numsOfReview, description}
    return (
        <Box
            display="flex"
            flexDirection={"column"}
            textAlign="left"
            gap="30px"
            width="100%">
            <Typography variant="h2" component="h1">
                Product Name
            </Typography>
            <Typography color={"#9F9F9F"} variant="h4" component="h5">
                Value
            </Typography>
            <Box display="flex" flexDirection="row" gap="10px">
                <Rating
                    name="half-rating"
                    defaultValue={3}
                    precision={1}
                    readOnly
                />
                <Divider orientation="vertical" flexItem />
                <Typography
                    color={"#9F9F9F"}
                    variant="subtitle1"
                    component="h5">
                    rate info
                </Typography>
            </Box>
            <Box width="80%">
                <Typography variant="subtitle1" component="h6">
                    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                    rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                    sem quam semper libero, sit amet adipiscing sem neque sed
                    ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                    hendrerit id, lorem.
                </Typography>
            </Box>
            <DetailsAction />
        </Box>
    );
};
export default Information;
