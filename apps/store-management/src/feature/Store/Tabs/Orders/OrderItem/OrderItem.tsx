import { FC, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

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
    const [count, setCount] = useState(0);
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            sx={{ border: "2px solid gray", padding: 1, borderRadius: "6px" }}
        >
            <Grid item>
                <Box display="flex" flexDirection="column">
                    <Typography variant="h6">{name}</Typography>
                    <Typography>{price}</Typography>
                    <Typography>{description}</Typography>
                </Box>
            </Grid>
            <Grid item>
                {count > 0 ? (
                    <CounterButton count={count} onChange={setCount} />
                ) : (
                    <Button onClick={() => setCount(1)}>Add button</Button>
                )}
            </Grid>
        </Grid>
    );
};

export default OrderItem;

type CounterButtonProps = {
    count: number;
    onChange: (newCount: number) => void;
};
const CounterButton: FC<CounterButtonProps> = ({ count, onChange }) => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => onChange(count - 1)}>
                {" "}
                -{" "}
            </Button>
            <Button variant="contained" onClick={() => onChange(count + 1)}>
                {" "}
                +{" "}
            </Button>
        </Stack>
    );
};
