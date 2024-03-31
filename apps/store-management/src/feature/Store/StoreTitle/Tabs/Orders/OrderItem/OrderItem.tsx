import { FC } from "react";
import { Button } from "../../../../../../../../../packages/common-components";
type Props = {
  name: string;
  description: string;
  price: string;
  veg: boolean;
  availability: boolean;
};

const OrderItem: FC<Props> = ({
  name,
  description,
  availability,
  price,
  veg,
}) => {
  return (
    <div className="flex flex-row flex-1 border-gray-150 border-2 rounded-md justify-between p-2">
      <div className="min-w-75p px-1 flex flex-col">
        <div className="text-lg">{name}</div>
        <div>{price}</div>
        <div>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Button>Add button</Button>
      </div>
    </div>
  );
};

export default OrderItem;
