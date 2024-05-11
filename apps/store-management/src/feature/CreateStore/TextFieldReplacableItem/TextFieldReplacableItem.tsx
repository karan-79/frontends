import React, { FC, useState } from "react";
import {
    CreateItemState,
    TextFieldReplacableItemProps,
    isDisplayItemType,
} from "./types.ts";
import {
    isCreateItemHaveRepresentableValue,
    validateCreateItem,
} from "./utils.ts";
import { Box, Button, TextField } from "@mui/material";
import { type } from "os";

const TextFieldReplaceableItem: FC<TextFieldReplacableItemProps> = ({
    ...props
}) => {
    const [item, setItem] = useState<CreateItemState>();

    const onChangeForm =
        (field: keyof CreateItemState) =>
        (e: React.ChangeEvent<HTMLInputElement>) =>
            setItem((prevState) => ({
                ...prevState!,
                [field]: e.target.value,
            }));

    return (
        <>
            {!isDisplayItemType(props) && showInput ? (
                <Box display="flex" flexDirection="column">
                    <TextField
                        label="Item name"
                        name={"itemName"}
                        onChange={onChangeForm("name")}
                    />
                    <TextField
                        label="Item description"
                        name={"itemDescription"}
                        onChange={onChangeForm("description")}
                    />
                    <TextField
                        label="Price"
                        name="itemPrice"
                        onChange={onChangeForm("price")}
                    />
                    <Button
                        onClick={() => {
                            if (validateCreateItem(item)) onAppendItem(item);
                        }}
                    >
                        {" "}
                        Save{" "}
                    </Button>
                </Box>
            ) : (
                isCreateItemHaveRepresentableValue(props) && (
                    <div> props.value </div>
                )
            )}
        </>
    );
};

export default TextFieldReplaceableItem;
