import { configureStore } from '@reduxjs/toolkit'

import { artistsQueryApi } from '../api/getArtists'

export default configureStore({
    reducer: {
        [artistsQueryApi.reducerPath]: artistsQueryApi.reducer,
    },
})