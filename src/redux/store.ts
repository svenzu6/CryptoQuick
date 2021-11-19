import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { cryptoApi } from '../pages/api/cryptoApi'
import { cryptoNewsApi } from '../pages/api/cryptoNewsApi'
import { geckoApi } from '../pages/api/geckoApi'

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        [...getDefaultMiddleware(), cryptoApi.middleware, geckoApi.middleware],
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [geckoApi.reducerPath]: geckoApi.reducer,
    },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
