import { FC, PropsWithChildren } from "react";
import { StoreTab, getStoreTabFromIndex, getStoreTabIndex } from "./utils";
import { Box, Tab, Tabs as MuiTab } from "@mui/material";

type Props = {
    selectedTab: StoreTab;
    setTab: (tab: StoreTab) => void;
};

const Tabs: FC<Props> = ({ selectedTab, setTab }) => {
    const handleTabChange = (_: any, newTab: number) => {
        console.log("changeing tab", newTab);
        setTab(getStoreTabFromIndex(newTab));
    };
    return (
        <>
            <TabContainer>
                <MuiTab
                    value={getStoreTabIndex(selectedTab)}
                    onChange={handleTabChange}
                >
                    {Object.values(StoreTab).map((name: StoreTab, idx) => (
                        <Tab label={name} key={idx + 1} />
                    ))}
                </MuiTab>
            </TabContainer>
        </>
    );
};

const TabContainer: FC<PropsWithChildren> = ({ children }) => (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>{children}</Box>
);

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
export default Tabs;
