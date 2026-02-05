import { Typography, ImageList, ImageListItem } from "@mui/material";

const Image = ({ title, src }: { title: string; src: string }) => {
  return (
    <ImageListItem key={title}>
      <img
        style={{ minWidth: "250px", borderRadius: "10px" }}
        srcSet={``}
        src={src}
        alt={title}
      />
      <Typography padding="10px" fontWeight="bold" variant="h5" component="h2">
        {title.replace(title[0], title[0].toUpperCase())}
      </Typography>
    </ImageListItem>
  );
};

export const Categories = () => {
  return (
    <ImageList
      sx={{
        maxWidth: "1200px",
        padding: "20px",
        margin: "0 auto",
      }}
      className="home-category container"
      gap={60}
      cols={3}>
      <Image title="bedroom" src="/Home/bedroom.jpg" />
      <Image title="living" src="/Home/living.jpg" />
      <Image title="dining" src="/Home/dining.jpg" />
    </ImageList>
  );
};
