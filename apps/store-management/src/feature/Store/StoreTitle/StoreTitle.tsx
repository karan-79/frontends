import PhotosCrousal from "./PhotosCrousal/PhotosCrousal";
import "./store-items.css";

const StoreTitle = () => {
  return (
    <>
      <PhotosCrousal />
      <div className="p-1 h-24 font-normal text-7xl flex items-center">
        My Store
      </div>
    </>
  );
};
export default StoreTitle;
