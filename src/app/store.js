import {configureStore} from '@reduxjs/toolkit'; 
import { musicApi } from '../services/musicApi';

export default configureStore({
    reducer: {
        [musicApi.reducerPath]: musicApi.reducer,
    },

});