import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import type {
    NewsData,
    NewsRequestType,
    NewsResponse,
} from '../../types/cryptoNews.types'

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url: string) => {
    return ({
        headers: cryptoNewsHeaders,
        url: url,
    })
}
export const cryptoNewsApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query<NewsResponse<NewsData>, NewsRequestType>({
            query: ({ count, newsCategory }) =>
                // eslint-disable-next-line max-len
                createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
    reducerPath: 'cryptoNewsApi',
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
