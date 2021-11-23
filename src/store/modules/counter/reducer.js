import { ADD_COUNTER, SUB_COUNTER } from "./actionTypes";

const reducer = (state = 0, action) => {
    switch(action.type){
        case ADD_COUNTER:
            return state + action.counter
        case SUB_COUNTER:
            return state - action.counter
        default:
            return state
    }
}

export default reducer;