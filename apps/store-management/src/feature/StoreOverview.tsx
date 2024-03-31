import StoreTitle from "./Store/StoreTitle";

const StoreOverview = () => {
  return (
    <div
      id="sm-overview"
      className="mt-2 flex min-w-full flex-col items-center font-sans"
    >
      <div className="w-3/4 flex flex-col border space-y-2">
        <StoreTitle />
      </div>
    </div>
  );
};

export default StoreOverview;
