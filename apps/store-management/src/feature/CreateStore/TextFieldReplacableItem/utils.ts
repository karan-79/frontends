import {CreateItemState, TextFieldReplacableItemProps} from "./types.ts";

export const validateCreateItem = (val: CreateItemState | undefined) : val is CreateItemState =>
    val !== undefined && val.name !== "" && val.description !== "" && val.price !== ""

export const isCreateItemHaveRepresentableValue = (props: {value: CreateItemState} | {} ) : props is TextFieldReplacableItemProps & { value : CreateItemState } => {
    return Object.keys(props).includes("value")
}