import { createContext, useContext, useReducer } from "react";


//prepare data layer
export const StateContext = createContext();

//wrap data layer component
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//consume data
export const useStateValue = () => useContext(StateContext);