
export type CreateItemState = {
    name: string
    description: string
    price: string
}

export type TextFieldReplacableItemProps = {
    onAppendItem: (value: CreateItemState) => void
} & ( {
    showInput: false;
    value: CreateItemState;
} | { showInput: true } );