import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ShareSetupImages() {
    const imgSrc = Array(8)
        .fill(0)
        .map(
            (_n, index) => `src/assets/Home/ShareSetup/share-${index + 1}.png`
        );
    return (
        <Box
            sx={{
                width: "99vw",
                overflowY: "hidden",
                borderBottom: "solid 1px #616161",
                paddingBottom: "20px",
            }}>
            <ImageList variant="masonry" cols={5} gap={20}>
                {imgSrc.map((src) => (
                    <ImageListItem key={src}>
                        <img src={src} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}
