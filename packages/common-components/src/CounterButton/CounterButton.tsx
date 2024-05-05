import {FC} from "react";

type CounterButtonProps = {
    count: number
    onChange: (count: number) => void
};

const CounterButton: FC<CounterButtonProps> = ({count = 0, onChange}) => {

    const onAction = (action: "add" | "subtract") => {
        return action == "add" ? () => onChange(++count) : () => onChange(--count)
    }

    return <div >
        <button onClick={onAction("add")}>-</button>
        <input type="text" value={count} max={10}/>
        <button onClick={onAction("subtract")}>+</button>
    </div>
}

export default CounterButton