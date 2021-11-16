export const createRequest = (url: string, parameters: number) => {
    return ({ headers: {
        'x-rapidapi-host': 'l4chsalter-alternative-me-crypto-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
    },
    method: 'GET',
    params: { limit: parameters, sort: 'rank', structure: 'array' },
    url: url })
}
