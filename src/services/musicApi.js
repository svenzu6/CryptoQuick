import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const musicApiHeaders = {
    'Accept': 'application/json',
    'Authorization': 'Bearer BQAA7EG12b8BqjRmZ312evNMVwOs3bl1fLvKN1csCV0RAwAcUA5gDmzqOsMELMhFeJHqqXNpJKZdPSdlWJ8gFYiO_4_7CE1lvi7LZhcGth4It-aXgSEiIQSVruoza95hdu6-zVFK17OHUQL1csNvnlv_n2XSEhSPyZw-10pblovD-eTRMb0tv1jBB0g'
    };

 const baseUrl = 'https://api.spotify.com/v1';

 const createRequest = (url) => ({url, headers: musicApiHeaders});
 
 export const musicApi = createApi({
     reducerPath: 'musicApi',
     baseQuery: fetchBaseQuery({baseUrl}),
     endpoints: (builder) => ({
         getArtists: builder.query({
             query:() => createRequest('/artists/2CnhqfjUG0qzsru0SMuhrk')
         })
     })   
 }) ;

 export const {
     useGetArtistsQuery,
 } = musicApi;
