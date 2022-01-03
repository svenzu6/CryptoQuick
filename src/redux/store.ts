import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { api } from '../pages/api'

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        [...getDefaultMiddleware(), api.middleware],
    reducer: {
        [api.reducerPath]: api.reducer,
    },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
