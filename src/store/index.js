import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import stockReducer from './redux/stocks'

export const store = configureStore({
    reducer: {
        stocks: stockReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true
})