import {FC, useState} from "react";
import {Button, CounterButton} from "common-components/src";

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
  const [count, setCount]= useState(0);
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
        {count > 0 ? 
            <CounterButton count={count} onChange={setCount}/>
        : <Button onClick={()=>setCount(1)}>Add button</Button>}

      </div>
    </div>
  );
};

export default OrderItem;
