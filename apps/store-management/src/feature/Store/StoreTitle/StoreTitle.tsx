import { Box, Button, Typography } from "@mui/material";
import PhotosCrousal from "./PhotosCrousal/PhotosCrousal";
import { FC } from "react";

type Props = {
    inEditMode: boolean;
    onEdit: () => void;
};
const StoreTitle: FC<Props> = ({ inEditMode, onEdit }) => {
    return (
        <>
            <PhotosCrousal />
            <Box
                display="flex"
                minWidth="100%"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography variant="h2">My Store</Typography>
                {!inEditMode && (
                    <Button variant="contained" onClick={onEdit}>
                        Edit
                    </Button>
                )}
            </Box>
        </>
    );
};
export default StoreTitle;
