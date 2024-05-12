import {
    ItemState,
    ItemWithId,
} from "./CreateStore/TextFieldReplacableItem/types";
import { CreateStoreState } from "./CreateStore/types";
import { create } from "zustand";
type StoreState = {
    id: string;
    items: ItemWithId[];
} & CreateStoreState;

type Actions = {
    updateStoreInfo: (storeDetails: Partial<CreateStoreState>) => void;
    appendItem: (item: ItemState) => void;
    updateItem: (id: string, item: Partial<ItemState>) => void;
    deleteItem: (id: string) => void;
};

const useStore = create<StoreState & Actions>((set) => ({}));
