import { Box } from "@mui/material";
import OrderItem from "./OrderItem/OrderItem";

const items = [
    {
        id: 1,
        storeId: "a4e6ab63-6be0-4bc3-9d4d-44b14a1c8b7f",
        categoryId: 101,
        name: "Product 1",
        veg: false,
        description: "Description for Product 1",
        price: 10.99,
        availability: true,
    },
    {
        id: 2,
        storeId: "b6d8fcad-d29c-4e69-9e1f-59e4d6e8e6bc",
        categoryId: 102,
        name: "Product 2",
        description: "Description for Product 2",
        veg: true,
        price: 20.49,
        availability: true,
    },
    {
        id: 3,
        storeId: "f0f50d98-57b1-4e94-9d4a-b8f5d8a8d0a0",
        categoryId: 103,
        veg: true,
        name: "Product 3",
        description: "Description for Product 3",
        price: 15.75,
        availability: true,
    },
];

const Orders = () => {
    return (
        <Box display="flex" flexDirection="column" gap={1}>
            {items.map((item, idx) => {
                return (
                    <OrderItem
                        name={item.name}
                        key={idx + 3}
                        description={item.description}
                        price={item.price + ""}
                        veg={item.veg}
                        availability={item.availability}
                    />
                );
            })}
        </Box>
    );
};

export default Orders;
