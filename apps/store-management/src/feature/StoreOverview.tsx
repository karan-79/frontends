import { useState } from "react";
import Menu from "./Store/Menu";
import StoreTitle from "./Store/StoreTitle";
import Tabs from "./Store/Tabs";
import { StoreTab } from "./Store/Tabs/utils";
import Reviews from "./Store/Tabs/Reviews/Reviews";
import Orders from "./Store/Tabs/Orders";
import { Box, Container } from "@mui/material";
import CreateStore from "./CreateStore/CreateStore";

const StoreOverview = () => {
    const [tab, setTab] = useState<StoreTab>(StoreTab.ORDERS);
    const [editStore, setEditStore] = useState(false);

    console.log(tab);
    return (
        <Box display="flex" flexDirection="column">
            <StoreTitle
                inEditMode={editStore}
                onEdit={() => setEditStore(true)}
            />
            <Tabs selectedTab={tab} setTab={setTab} />
            <Box sx={{ marginTop: 1 }}>
                {
                    [<Orders />, <Reviews />][
                        Object.values(StoreTab).indexOf(tab)
                    ]
                }
            </Box>
            {tab === StoreTab.ORDERS && <Menu />}
            <CreateStore open={editStore} onClose={() => setEditStore(false)} />
        </Box>
    );
};

export default StoreOverview;
