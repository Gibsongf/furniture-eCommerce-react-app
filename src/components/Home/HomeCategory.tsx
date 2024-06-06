import {
    Box,
    Typography,
    ImageList,
    ImageListItem,
    Stack,
} from "@mui/material";
const BrowseRange = () => {
    return (
        <Box marginTop="30px" marginBottom="30px">
            <Typography fontWeight="bold" variant="h5" component="h2">
                Browse The Range
            </Typography>
            <Typography variant="h6" component="h3">
                Suspendisse suscipit neque metus, a malesuada justo fermentum
                non.
            </Typography>
        </Box>
    );
};
//here on hover we can put a dark background color with opacity and
//a button at the middle as link for that category
const Image = ({ title, src }: { title: string; src: string }) => {
    return (
        <ImageListItem key={title}>
            <img
                style={{ borderRadius: "10px" }}
                srcSet={``}
                src={src}
                alt={title}
            />
            <Typography
                padding="10px"
                fontWeight="bold"
                variant="h5"
                component="h2">
                {title.replace(title[0], title[0].toUpperCase())}
            </Typography>
        </ImageListItem>
    );
};
const CategoryImage = () => {
    return (
        <ImageList sx={{ width: "70%" }} gap={50} cols={3}>
            <Image title="bedroom" src="src/assets/Home/bedroom.png" />
            <Image title="living" src="src/assets/Home/living.png" />
            <Image title="dining" src="src/assets/Home/dining.png" />
        </ImageList>
    );
};
export const Categories = () => {
    return (
        <>
            <BrowseRange />
            <Stack alignItems="center">
                <CategoryImage />
            </Stack>
        </>
    );
};
