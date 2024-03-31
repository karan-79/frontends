import { Children, FC, PropsWithChildren, useState } from "react";
import Orders from "./Orders";
import Reviews from "./Reviews/Reviews";

const Tabs = () => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <TabContainer>
        {["Order", "Reviews"].map((name, idx) => (
          <Tab
            name={name}
            key={idx + 1}
            active={tab == idx}
            onClick={() => setTab(idx)}
          />
        ))}
      </TabContainer>
      {[<Orders />, <Reviews />][tab]}
    </>
  );
};

const TabContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex">{children}</div>
);

type TabProps = {
  name: string;
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
