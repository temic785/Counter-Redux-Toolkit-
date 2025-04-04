import {createAction, createReducer} from "@reduxjs/toolkit";

export type CounterType = {
    minVal: number
    maxVal: number
    count: number
    message: string
}

const initialState: CounterType = {minVal: 0, maxVal: 5, count: 0, message: ""};

export const IncrementCounterAC = createAction("counter/incrementCounter");
export const ResetCounterAC = createAction("counter/resetCounter");
export const ChangeCounterValueAC = createAction<{
    maxVal: number,
    minValue: number,
    message: string
}>("counter/changeCounterValue");
export const MessagesHandler = createAction<{ message: string }>("counter/messagesHandler");

export const counterReducer = createReducer(initialState, builder => {
    builder

        .addCase(IncrementCounterAC, (state) => {

            return {...state, count: state.count + 1}
        })
        .addCase(ResetCounterAC, (state) => {
            return {...state, count: 0};
        })
        .addCase(ChangeCounterValueAC, (state, action) => {
            console.log("min: ", state.minVal, " max:", state.maxVal, "count: ", state.count, "mes: ", state.message)
            return {
                ...state,
                minVal: action.payload.minValue,
                maxVal: action.payload.maxVal,
                count: action.payload.minValue,
                message: action.payload.message
            }
        })
        .addCase(MessagesHandler, (state, action) => {
                return {...state, message: action.payload.message}
            }
        );

})