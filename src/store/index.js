import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from "./slices/userSlice";
import { cartReducer } from "./slices/cartSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
}

const reducer = combineReducers({
    user: userReducer,
    cart: cartReducer,

});

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: false,
        }
    ),
});

export const persistor = persistStore(store);

export { userActions } from './slices/userSlice';
export { cartActions } from './slices/cartSlice';
