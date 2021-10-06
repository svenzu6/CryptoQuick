import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { spotifyApi } from '../api/spotifyApi'

export const store = configureStore({
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware(), spotifyApi.middleware]
    },
    reducer: {
        [spotifyApi.reducerPath]: spotifyApi.reducer,
    },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
