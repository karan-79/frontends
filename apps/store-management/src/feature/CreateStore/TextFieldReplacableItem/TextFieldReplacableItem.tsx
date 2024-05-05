import {Button, TextField} from "common-components/src";
import React, {FC, useState} from "react";
import {CreateItemState, TextFieldReplacableItemProps} from "./types.ts";
import {isCreateItemHaveRepresentableValue, validateCreateItem} from "./utils.ts";

const TextFieldReplaceableItem: FC<TextFieldReplacableItemProps> = ({showInput, onAppendItem, ...props}) => {

    const [item, setItem] = useState<CreateItemState>();

    const onChangeForm = (field: keyof CreateItemState) =>
        (e: React.ChangeEvent<HTMLInputElement>) =>
            setItem(prevState => ({...prevState!, [field]: e.target.value}))

    return <div>
        {
            showInput ?
                <div className="flex flex-col gap-0.5">
                    <TextField label="Item name" name={"itemName"} onChange={onChangeForm("name")}/>
                    <TextField label="Item description" name={"itemDescription"}
                               onChange={onChangeForm("description")}/>
                    <TextField label="Price" name="itemPrice" onChange={onChangeForm("price")}/>
                    <Button onChange={() => {
                        if (validateCreateItem(item)) onAppendItem(item)
                    }
                    }> Save </Button>
                </div>
                : isCreateItemHaveRepresentableValue(props) && <div> props.value </div>
        }
    </div>
}

export default TextFieldReplaceableItem