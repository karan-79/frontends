export type CreateItemState = {
    name: string;
    description: string;
    price: string;
};

export type EditItemState = CreateItemState & { id: string };

export type AppendItemType = {
    onAppendItem: (value: CreateItemState) => void;
    showInput: true;
};

export type EditItemType = {
    onEditItem: (value: EditItemState) => void;
    value: EditItemState;
    showInput: true;
};

export type DisplayItemType = Omit<EditItemType, "showInput">;

export type TextFieldReplacableItemProps =
    | AppendItemType
    | EditItemType
    | DisplayItemType;

export const isDisplayItemType = (
    item: any 
): item is DisplayItemType =>
    Object.keys(item).find((v) => v === "showInput") === undefined;

export const 
