import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Footer = () => {
    const help: string[] = ["Payment Options", "Returns", "Privacy Policies"];
    const style: object = {
        display: "flex",
        flexDirection: "column",
        gap: "40px",
    };

    return (
        <>
            <Divider />

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr);",
                    minHeight: "300px",
                    padding: "40px 75px 40px 75px",
                    justifyItems: "center",
                    textAlign: "left",
                    gap: "5px",
                }}>
                <Box sx={style}>
                    <Typography fontWeight={"bold"} variant="h5" component="h1">
                        Curabitur ullamcorpe
                    </Typography>
                    <Typography color="#616161" variant="h6" component="h1">
                        Nullam dictum felis eu pede mollis pretium. Integer
                        tincidunt.
                    </Typography>
                </Box>
                <Box sx={style}>
                    <Typography
                        textAlign="left"
                        color="#616161"
                        variant="h6"
                        component="h1">
                        Links
                    </Typography>
                    <Link to="/">
                        <Typography
                            fontWeight={"bold"}
                            variant="h6"
                            component="h1">
                            Home
                        </Typography>
                    </Link>
                    <Link to="/shop">
                        <Typography
                            fontWeight={"bold"}
                            variant="h6"
                            component="h1">
                            Shop
                        </Typography>
                    </Link>
                    <Link to="/contact">
                        <Typography
                            fontWeight={"bold"}
                            variant="h6"
                            component="h1">
                            Contact
                        </Typography>
                    </Link>
                </Box>
                <Box sx={style}>
                    <Typography color="#616161" variant="h6" component="h1">
                        Help
                    </Typography>
                    {help.map((name) => (
                        <Typography
                            key={name}
                            fontWeight={"bold"}
                            variant="h6"
                            component="h1">
                            {name}
                        </Typography>
                    ))}
                </Box>
                <Box className="col4">Newsletter</Box>
            </Box>
        </>
    );
};
