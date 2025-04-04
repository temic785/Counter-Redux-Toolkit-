import {CounterType} from "../../../features/counter/model/counter-reducer.ts";

type UniversalButtonProps = {
    className?: string;
    title: string;
    onClick: () => void;
    counter: CounterType
}


export const UniversalButton = ({className, title, onClick, counter}: UniversalButtonProps) => {

    const disabledButton =
        (counter?.maxVal === counter?.count && title === "inc") ||
        (counter.maxVal === counter.minVal) ||
        (counter.minVal < 0) ||
        (counter.maxVal < 0) ||
        (counter.minVal > counter.maxVal) ||
        (counter.message.length > 1 && title !== "set");


    return (
        <div>
            <button disabled={disabledButton} onClick={onClick} className={className}>{title}</button>
        </div>
    );
};

