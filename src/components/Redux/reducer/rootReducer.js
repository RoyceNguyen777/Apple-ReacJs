import { combineReducers } from "redux";
import CategoryAPI from "./categoryapi";
import AddressReducer from "./myreducer";
import ApiProduct from "./productapi";
import ApiUser from "./userapi";

const rootReducer = combineReducers({
    redux1: AddressReducer,
    fetchapi: ApiProduct,
    fetchapicategory: CategoryAPI,
    fetchapiuser: ApiUser
})
export default rootReducer;