import {CounterType} from "../../../../model/counter-reducer.ts";

type EditableSpanProps = {
    counter: CounterType
    errorValue: boolean
}

export const EditableSpan = ({counter, errorValue}: EditableSpanProps) => {

    return (
        <span className={errorValue ? "filter-tablo" : "tablo"}>
            {counter.message.length > 1 ? counter.message : counter.count}
        </span>
    );
};

