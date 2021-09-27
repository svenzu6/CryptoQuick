import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const musicApiHeaders = {
    'Accept': 'application/json',
    'Authorization': ""
    };

// TODO: move to contants file
const baseUrl = 'https://api.spotify.com/v1';

// TODO: move to utils folder
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
