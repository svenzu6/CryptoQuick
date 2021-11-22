import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { geckoApi } from '../pages/api/geckoApi'

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        [...getDefaultMiddleware(), geckoApi.middleware],
    reducer: {
        [geckoApi.reducerPath]: geckoApi.reducer,
    },
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
