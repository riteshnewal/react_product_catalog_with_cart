import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducers } from "../reducers/Reducers";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

//export default createStore(reducers, applyMiddleware(ReduxThunk));
let store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
let persistor = persistStore(store);

export default { store, persistor };
