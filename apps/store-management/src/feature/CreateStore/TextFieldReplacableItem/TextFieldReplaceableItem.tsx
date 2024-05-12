import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { ItemState, TextFieldReplaceableProps } from "./types";
import { ChangeEvent, FC, useState } from "react";

const TextFieldReplaceableItem: FC<TextFieldReplaceableProps> = ({
    item,
    onSave,
    onCancel,
    __tag,
}) => {
    const [itemState, setItemState] = useState<ItemState>(item);

    const handleSave = () => {
        onSave(itemState);
    };

    const handleChange =
        (field: keyof ItemState) => (e: ChangeEvent<HTMLInputElement>) =>
            setItemState((prev) => ({ ...prev, [field]: e.target.value }));
    return (
        <>
            {__tag === "Create" && (
                <Box display="flex" flexDirection="column" gap={1}>
                    <TextField
                        label="Name"
                        value={itemState.name}
                        onChange={handleChange("name")}
                    />
                    <TextField
                        label="Description"
                        value={itemState.description}
                        onChange={handleChange("description")}
                    />
                    <TextField
                        label="Price"
                        value={itemState.price}
                        onChange={handleChange("price")}
                    />
                    <Box minWidth="100%" display="flex" gap={0.4}>
                        <Button variant="outlined" onClick={onCancel} fullWidth>
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSave}
                            fullWidth
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            )}
            {__tag === "Display" && (
                <Box>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="h6">{itemState.name}</Typography>
                        <Typography variant="h5"> {itemState.price}</Typography>
                    </Box>
                    <Typography variant="body1">
                        {itemState.description}
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default TextFieldReplaceableItem;
