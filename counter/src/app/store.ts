import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {counterReducer} from "../features/counter/model/counter-reducer.ts";
import {loadState, saveState} from "./utils/loacalStorage-utils.ts";

// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadState(),
})
store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

