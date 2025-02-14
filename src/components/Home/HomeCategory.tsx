import { Typography, ImageList, ImageListItem } from "@mui/material";

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

export const Categories = () => {
    return (
        <ImageList sx={{ width: "85%" }} gap={50} cols={3}>
            <Image title="bedroom" src="src/assets/Home/bedroom.png" />
            <Image title="living" src="src/assets/Home/living.png" />
            <Image title="dining" src="src/assets/Home/dining.png" />
        </ImageList>
    );
};
