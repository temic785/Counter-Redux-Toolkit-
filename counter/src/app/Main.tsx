import {SettingCounter} from "../features/counter/ui/SettingCounter/SettingCounter.tsx";
import {Counter} from "../features/counter/ui/Counter/Counter.tsx";

export const Main = () => {

    return (
        <div className="main">
            <SettingCounter />
            <Counter />
        </div>
    );
};

