import {
    ItemState,
    ItemWithId,
} from "./CreateStore/TextFieldReplacableItem/types";
import { CreateStoreState } from "./CreateStore/types";
import { create } from "zustand";
type StoreWithId = { id: string } & CreateStoreState;
type StoreState = {
    store: StoreWithId;
    items: ItemWithId[];
};

type Actions = {
    updateStoreInfo: (storeDetails: Partial<CreateStoreState>) => void;
    appendItem: (item: ItemState) => void;
    updateItem: (id: string, item: Partial<ItemState>) => void;
    deleteItem: (id: string) => void;
};

//const useStore = create<StoreState & Actions>((set) => ({
//    store: {} as StoreWithId,
//    items: [],
//    updateStoreInfo: (storeDetails: Partial<CreateStoreState>) => ;
//    appendItem: (item: ItemState) => void;
//    updateItem: (id: string, item: Partial<ItemState>) => void;
//    deleteItem: (id: string) => void;
//
//}));
