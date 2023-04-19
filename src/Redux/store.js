import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"
import thunk from "redux-thunk"
import { kanbanReducer } from "./kanban/kanban.reducer"
import { userReducer } from "./Authentication/user.reducer"

const reducer = combineReducers({
    userReducer:userReducer,
    kanbanReducer:kanbanReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = legacy_createStore(reducer,composeEnhancer(applyMiddleware(thunk)))