import { Box, Grid, Paper } from "@mui/material";
import img1 from "../../../../assets/pexels-jonathan-borba-2983101.jpg";
import img2 from "../../../../assets/pexels-photo-3434523.jpeg";
import img3 from "../../../../assets/pexels-valeria-boltneva-1833349.jpg";

const PhotosCrousal = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            sx={{ overflow: "hidden" }}
            minWidth="100%"
            maxHeight={400}
        >
            <Box display="flex" minWidth="60%" flexDirection="column">
                <Box
                    sx={{
                        "&:hover": { transform: "scale(1.1)" },
                        transition: "transform 0.2s",
                        objectFit: "cover",
                    }}
                    component="img"
                    maxWidth="100%"
                    maxHeight="50%"
                    src={img1}
                    alt={`Food Item 1`}
                />
                <Box
                    sx={{
                        "&:hover": { transform: "scale(1.1)" },
                        transition: "transform 0.2s",
                        objectFit: "cover",
                    }}
                    component="img"
                    maxHeight="50%"
                    maxWidth="100%"
                    src={img2}
                    alt={`Food Item 2`}
                />
            </Box>
            <Box
                sx={{
                    "&:hover": { transform: "scale(1.1)" },
                    transition: "transform 0.2s",
                    objectFit: "cover",
                }}
                component="img"
                maxWidth="100%"
                src={img3}
                alt={`Food Item 3`}
            />
        </Box>
    );
};

export default PhotosCrousal;
