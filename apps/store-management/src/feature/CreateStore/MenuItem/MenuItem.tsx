import { Box, IconButton } from "@mui/material";
import { FC, useState } from "react";
import TextFieldReplaceableItem from "../TextFieldReplacableItem/TextFieldReplaceableItem";
import { Delete, EditNote } from "@mui/icons-material";
import { ItemWithId, ItemState } from "../TextFieldReplacableItem/types";

type Props = {
    item: ItemState;
    onEditItem: (item: ItemState) => void;
    onDeleteItem: () => void;
};
const MenuItem: FC<Props> = ({ item, onEditItem, onDeleteItem }) => {
    const [edit, setEdit] = useState(false);

    return (
        <Box
            display="flex"
            border="1px solid gray"
            borderRadius={4}
            alignItems="center"
            padding={1}
            justifyContent="space-between"
        >
            <TextFieldReplaceableItem
                item={item}
                onSave={(item) => {
                    onEditItem(item);
                    setEdit(false);
                }}
                onCancel={() => setEdit(false)}
                __tag={edit ? "Create" : "Display"}
            />
            {!edit && (
                <Box display="flex">
                    <IconButton onClick={() => setEdit(true)}>
                        <EditNote />
                    </IconButton>
                    <IconButton onClick={onDeleteItem}>
                        <Delete />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};

export default MenuItem;
