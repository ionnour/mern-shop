import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from  "redux-devtools-extension";

const reducer = combineReducers({
  // cart: cartReducer,
  // getProducts: getProductsReducers,
  // getProductDetails: getProductDetails,
});

const middleware = [thunk];

const store = createStore (
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

 export default store;