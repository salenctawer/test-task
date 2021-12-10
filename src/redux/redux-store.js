import { combineReducers, createStore } from "redux";
import usersReducer from "./users-reducer";



let reducer = combineReducers({
    users: usersReducer
})

let store = createStore(reducer)


export default store