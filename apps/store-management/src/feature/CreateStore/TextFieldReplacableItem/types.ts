export type ItemState = {
    name: string;
    description: string;
    price: string;
};

export type ItemWithId = ItemState & { id: string };

type CreateItemType = { item: ItemState; __tag: "Create" };

type DisplayItemType = {
    item: ItemState;
    __tag: "Display";
};

export type TextFieldReplaceableProps = {
    onSave: (item: ItemState) => void;
    onCancel: () => void;
} & (CreateItemType | DisplayItemType);
