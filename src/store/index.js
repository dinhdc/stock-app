import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import stockReducer from './redux/stocks'
import userReducer from './redux/user'

export const store = configureStore({
    reducer: {
        stocks: stockReducer,
        users: userReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true
})