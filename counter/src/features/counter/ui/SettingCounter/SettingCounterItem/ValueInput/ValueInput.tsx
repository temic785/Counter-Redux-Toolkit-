import { ChangeEvent } from "react";
import { useAppDispatch } from "../../../../../../common/hooks/useAppDispatch.ts";
import { ChangeCounterValueAC, CounterType } from "../../../../model/counter-reducer.ts";

type ValueInputProps = {
    spanTitle: string;
    counter: CounterType;
    currentInput: "max" | "min";
};

export const ValueInput = ({ spanTitle, counter, currentInput }: ValueInputProps) => {
    const dispatch = useAppDispatch();
    const maxInput = currentInput === "max";

    const isErrorValue = (min: number, max: number) => {
        return min === max || min < 0 || max < 0 || min > max;
    };

    const errorInput = isErrorValue(counter.minVal, counter.maxVal);

    const maxMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value);
        const newMax = maxInput ? newValue : counter.maxVal;
        const newMin = maxInput ? counter.minVal : newValue;

        const error = isErrorValue(newMin, newMax);
        const messageInput = error ? "Incorrect value!" : "enter values and press 'set'";

        dispatch(
            ChangeCounterValueAC({
                maxVal: newMax,
                minValue: newMin,
                message: messageInput,
            })
        );
    };

    return (
        <div className="value-input">
            <span className={"localValue"}>{spanTitle}</span>
            <input
                type={"number"}
                className={errorInput ? "invalidLocalValue" : "localValue"}
                value={maxInput ? counter.maxVal : counter.minVal}
                onChange={maxMinValueChange}
            />
        </div>
    );
};
