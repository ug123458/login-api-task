import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer"

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})

const userInfostorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const intialState = {
  userLogin: { userInfo: userInfostorage },
}

const middleware = [thunk]
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
