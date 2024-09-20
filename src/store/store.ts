import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersReducers } from './slices/users/usersSlice';
import { productsReducer } from './slices/products/productsSlice';

// Определяем тип состояния
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    users: usersReducers,
    products: productsReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST']
            }
        }),
});

// Типизация для dispatch и селектора
export type AppDispatch = typeof store.dispatch;

export default store;