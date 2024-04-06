import { useState } from "react";
import Menu from "./Store/Menu";
import StoreTitle from "./Store/StoreTitle";
import Tabs from "./Store/Tabs";
import { StoreTab } from "./Store/Tabs/utils";
import Reviews from "./Store/Tabs/Reviews/Reviews";
import Orders from "./Store/Tabs/Orders";

const StoreOverview = () => {
  const [tab, setTab] = useState<StoreTab>(StoreTab.ORDERS);

  return (
    <div
      id="sm-overview"
      className="mt-2 flex min-w-full flex-col items-center font-sans"
    >
      <div className="w-3/4 flex flex-col border space-y-2">
        <StoreTitle />
        <Tabs selectedTab={tab} setTab={setTab} />
        {[<Orders />, <Reviews />][Object.values(StoreTab).indexOf(tab)]}
        {tab === StoreTab.ORDERS && <Menu />}
      </div>
    </div>
  );
};

export default StoreOverview;
