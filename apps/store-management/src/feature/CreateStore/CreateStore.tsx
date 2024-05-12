import { FC, useState } from "react";
import { CreateStoreState } from "./types.ts";
import {
    Box,
    Button,
    Drawer,
    IconButton,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextFieldReplaceableItem from "./TextFieldReplacableItem/TextFieldReplaceableItem.tsx";
import { ItemState, ItemWithId } from "./TextFieldReplacableItem/types.ts";
import { EditNote } from "@mui/icons-material";
import MenuItem from "./MenuItem/MenuItem.tsx";

type Props = { open: boolean; onClose: () => void };
const CreateStore: FC<Props> = ({ open, onClose }) => {
    const [store, setStore] = useState<CreateStoreState>(
        {} as CreateStoreState
    );
    const [menuItems, setMenuItems] = useState<ItemWithId[]>([]);
    const [appendItem, setAppendItem] = useState<boolean>(false);
    const handleStoreFieldChange =
        (field: keyof CreateStoreState) => (e: any) => {
            setStore((prevState) => ({
                ...prevState,
                [field]: e.target.value,
            }));
        };

    const handleAppendItem = (item: ItemState) => {
        const obj = { ...item, id: "" + menuItems.length + 1 };
        setMenuItems((prevState) => [...prevState, obj]);
        setAppendItem(false);
    };

    const handleEditItem = (id: string) => (item: ItemState) => {
        setMenuItems((prev) => {
            const idx = menuItems.findIndex((i) => i.id === id);
            if (idx === -1) return prev;
            const newList = [...prev];
            newList[idx] = { ...newList[idx], ...item };
            return newList;
        });
    };

    const handleDeleteItem = (id: string) => () => {
        setMenuItems((prev) => [...prev.filter((f) => f.id !== id)]);
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box
                minWidth={570}
                padding={1}
                display="flex"
                flexDirection="column"
                gap={2}
            >
                <Typography variant="h2">My Store</Typography>
                <TextField
                    label="Store name"
                    onChange={handleStoreFieldChange("name")}
                />
                <TextField
                    label="Description"
                    onChange={handleStoreFieldChange("description")}
                    multiline
                    rows={6}
                />
                <TextField
                    label="Location"
                    onChange={handleStoreFieldChange("location")}
                />
                <Box>
                    <Box display="flex" alignItems="center">
                        <Typography variant="h6">Items</Typography>
                    </Box>
                    {appendItem && (
                        <Paper
                            variant="elevation"
                            elevation={4}
                            sx={{ padding: 2 }}
                        >
                            <TextFieldReplaceableItem
                                item={{ name: "", description: "", price: "" }}
                                onSave={handleAppendItem}
                                onCancel={() => setAppendItem(false)}
                                __tag="Create"
                            />
                        </Paper>
                    )}
                    <Box display="flex" flexWrap="wrap" gap={1}>
                        {menuItems.map(({ id, ...item }, idx) => (
                            <MenuItem
                                item={item}
                                key={idx + 3}
                                onEditItem={handleEditItem(id)}
                                onDeleteItem={handleDeleteItem(id)}
                            />
                        ))}
                        <IconButton onClick={() => setAppendItem(true)}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
};

export default CreateStore;
