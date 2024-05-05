import React, {FC} from "react";
import {Minus, Plus} from "lucide-react";

type CounterButtonProps = {
    count: number
    max?: number
    onChange: (count: number) => void
};

const CounterButton: FC<CounterButtonProps> = ({count = 0, max= Infinity, onChange}) => {

    const onAction = (action: "add" | "subtract") => {
        return action === "add" ? () => {
            if(count+1 > max) return
            console.log("Add")
            onChange(++count)
        } : () => {
            if(count-1 < 0) return
            onChange(--count)
        }
    }

    return <div className="flex flex-row  ">
        <button type="button" onClick={onAction("subtract")}><Minus /></button>
        <div>{count}</div>
        <button type="button" onClick={onAction("add")}><Plus /></button>
    </div>
}

export default CounterButton