import { configureStore } from '@reduxjs/toolkit'

import { musicApi } from '../api/musicApi'

export default configureStore({
    reducer: {
        [musicApi.reducerPath]: musicApi.reducer,
    },
})