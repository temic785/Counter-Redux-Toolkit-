import {ValueInput} from "./SettingCounterItem/ValueInput/ValueInput.tsx";
import {UniversalButton} from "../../../../common/components/UniversalButton/UniversalButton.tsx";
import {useAppSelector} from "../../../../common/hooks/useAppSelector.ts";
import {selectCounter} from "../../model/counter-selector.ts";
import {useAppDispatch} from "../../../../common/hooks/useAppDispatch.ts";
import {MessagesHandler} from "../../model/counter-reducer.ts";

export const SettingCounter = () => {
    const counter = useAppSelector(selectCounter)
    const dispatch = useAppDispatch();

    const dispatchMessage = () => {
        dispatch(MessagesHandler({message: ""}))
    }

    return (
        <div className={"setting-counter"}>
            <ValueInput counter={counter} spanTitle={"max value"} currentInput={"max"}/>
            <ValueInput counter={counter} spanTitle={"min value"} currentInput={"min"}/>
            <UniversalButton onClick={dispatchMessage} title={"set"} counter={counter}/>
        </div>
    );
};

