import { FC, PropsWithChildren } from "react";
import { StoreTab } from "./utils";

type Props = {
  selectedTab: StoreTab;
  setTab: (tab: StoreTab) => void;
};

const Tabs: FC<Props> = ({ selectedTab, setTab }) => {
  return (
    <>
      <TabContainer>
        {Object.values(StoreTab).map((name: StoreTab, idx) => (
          <Tab
            name={name}
            key={idx + 1}
            active={name === selectedTab}
            onClick={() => setTab(name)}
          />
        ))}
      </TabContainer>
    </>
  );
};

const TabContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex">{children}</div>
);

type TabProps = {
  name: StoreTab;
  active: boolean;
  onClick: () => void;
};

const Tab: FC<TabProps> = ({ name, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center max-h-10 ${
      active ? "border-2 border-b-slate-500" : ""
    } bg-slate-300 hover:bg-slate-400 cursor-pointer text-2xl px-6 text-slate-600`}
  >
    {name}
  </div>
);

export default Tabs;
