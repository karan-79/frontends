import { FC, PropsWithChildren } from "react";
import "./store-items.css";
import PhotosCrousal from "./PhotosCrousal/PhotosCrousal";
import Tabs from "./Tabs";

const StoreTitle = () => {
  return (
    <>
      <PhotosCrousal />
      <div className="p-1 h-24 font-normal text-7xl flex items-center">
        My Store
      </div>
      <Tabs />
    </>
  );
};
export default StoreTitle;
