import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ShareSetupImages() {
    const imgSrc = Array(8)
        .fill(0)
        .map((n, index) => `src/assets/Home/ShareSetup/share-${index + 1}.png`);
    return (
        <Box
            sx={{
                width: "99%",
                backgroundColor: "#FCF8F3",
                overflowY: "hidden",
                borderBottom: "solid 1px #616161",
            }}>
            <ImageList variant="masonry" cols={4} gap={10}>
                {imgSrc.map((src) => (
                    <ImageListItem key={src}>
                        <img src={src} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}
