import {createStore, combineReducers} from "redux"
import contador from "./modules/counter/reducer"

const reducers = combineReducers({counter: contador})
const store = createStore(reducers)

export default store