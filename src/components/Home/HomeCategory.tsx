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
            <Image title="bedroom" src="public/Home/bedroom.png" />
            <Image title="living" src="public/Home/living.png" />
            <Image title="dining" src="public/Home/dining.png" />
        </ImageList>
    );
};
