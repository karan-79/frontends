export enum StoreTab {
    ORDERS = "Orders",
    REVIEWS = "Reviews",
}
const storeTabs = Object.values(StoreTab);
export const getStoreTabIndex = (tab: StoreTab) => storeTabs.indexOf(tab);

export const getStoreTabFromIndex = (tab: number) => storeTabs[tab];
