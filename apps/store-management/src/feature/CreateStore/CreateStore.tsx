import { FC, useState } from "react";
import { CreateStoreState } from "./types.ts";
import { CreateItemState } from "./TextFieldReplacableItem/types.ts";
import TextFieldReplaceableItem from "./TextFieldReplacableItem";
import {
    Box,
    Button,
    Drawer,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type Props = { open: boolean; onClose: () => void };
const CreateStore: FC<Props> = ({ open, onClose }) => {
    const [store, setStore] = useState<CreateStoreState>(
        {} as CreateStoreState
    );
    const [menuItems, setMenuItems] = useState<CreateItemState[]>([]);
    const [appendItem, setAppendItem] = useState<boolean>(false);
    const onChangeField = (field: keyof CreateStoreState) => (e: any) => {
        setStore((prevState) => ({ ...prevState, [field]: e.target.value }));
    };

    const handleAppendItem = (item: CreateItemState) => {
        setMenuItems((prevState) => [...prevState, item]);
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
                <TextField label="Store name" />
                <TextField label="Description" multiline rows={6} />
                <TextField label="Location" />
                <Box>
                    <Box display="flex" alignItems="center">
                        <Typography variant="h6">Items</Typography>
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        {appendItem && (
                            <TextFieldReplaceableItem
                                onAppendItem={handleAppendItem}
                                showInput
                            />
                        )}
                        {menuItems.map((item, idx) => (
                            <TextFieldReplaceableItem
                                onAppendItem={handleAppendItem}
                                value={item}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
};

export default CreateStore;
