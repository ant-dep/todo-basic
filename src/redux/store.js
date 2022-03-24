import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import todoReducer from "./todoReducer";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["todos"],
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

const configureStore = (initialState) => {
  return createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export const store = configureStore();
export const persistor = persistStore(store);
