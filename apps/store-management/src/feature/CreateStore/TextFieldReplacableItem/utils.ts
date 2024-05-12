import { ItemState, TextFieldReplacableItemProps } from "./types.ts";

export const validateCreateItem = (val: Partial<ItemState>): val is ItemState =>
    val !== undefined &&
    val.name !== "" &&
    val.description !== "" &&
    val.price !== "";

export const isCreateItemHaveRepresentableValue = (
    props: { value: ItemState } | {}
): props is TextFieldReplacableItemProps & { value: ItemState } => {
    return Object.keys(props).includes("value");
};
