import {Button, TextField} from "common-components/src";
import {useState} from "react";
import {CreateStoreState} from "./types.ts";
import {CirclePlus} from "lucide-react";
import {CreateItemState} from "./TextFieldReplacableItem/types.ts";
import TextFieldReplaceableItem from "./TextFieldReplacableItem";

const CreateStore = () => {

    const [store, setStore] = useState<CreateStoreState>({} as CreateStoreState);
    const [menuItems, setMenuItems] = useState<CreateItemState[]>([]);
    const [appendItem, setAppendItem] = useState<boolean>(false);
    const onChangeField = (field: keyof CreateStoreState) => (e: any) => {
        setStore(prevState => ({...prevState, [field]: e.target.value}));
    }

    const handleAppendItem = (item: CreateItemState) => {
        setMenuItems(prevState => [...prevState, item])
    }
    return <div className="p-5 w-full grid grid-rows-2 min-h-dvh">
        <div className="w-full grid grid-cols-2 content-center">
            <div className="flex flex-col gap-8 w-96">
                <TextField name="store-name" label="Name" onChange={onChangeField("name")}/>
                <TextField name="descripton" label="About" onChange={onChangeField("description")}/>
                <TextField name="location" label="location" onChange={onChangeField("location")}/>
            </div>
            <div className="w-full grid grid-rows-2 text-white">
                <div className="flex flex-row items-center justify-around w-full flex-1">
                    <p className="text-lg">Menu</p>
                    <CirclePlus/>
                </div>
                <div>
                    {appendItem && <TextFieldReplaceableItem showInput={true} onAppendItem={handleAppendItem} />}
                    {/*{menuItems.map(({name, description, price}, idx) => */}
                    {/*    // (<TextFieldReplaceableItem onAppendItem={} showInput={}))}*/}
                </div>
            </div>
        </div>
        <div className="w-full grid grid-cols-2 content-center">
            <Button type="primary">Cancel</Button>
            <Button type="primary">Create</Button>
        </div>
    </div>
}

export default CreateStore;