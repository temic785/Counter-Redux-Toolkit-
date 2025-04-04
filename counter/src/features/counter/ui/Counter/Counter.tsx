import {EditableSpan} from "./CounterItem/EditableSpan/EditableSpan.tsx";
import {UniversalButton} from "../../../../common/components/UniversalButton/UniversalButton.tsx";
import {useAppSelector} from "../../../../common/hooks/useAppSelector.ts";
import {selectCounter} from "../../model/counter-selector.ts";
import {useAppDispatch} from "../../../../common/hooks/useAppDispatch.ts";
import {IncrementCounterAC, ResetCounterAC} from "../../model/counter-reducer.ts";

export const Counter = () => {
    const counter = useAppSelector(selectCounter);
    const dispatch = useAppDispatch();

    const errorValue =(counter.maxVal === counter.count)


    const incrementCounter = () => {
        dispatch(IncrementCounterAC())
    }

    const resetCounter = () => {
        dispatch(ResetCounterAC())
    }


    return (
        <div className={"counter"}>


            <EditableSpan errorValue={errorValue} counter={counter}/>


            <div className={"counterButton"}>
                <UniversalButton counter={counter} onClick={incrementCounter} title={"inc"}/>
                <UniversalButton counter={counter} onClick={resetCounter} title={"reset"}/>
            </div>
        </div>
    );
};

