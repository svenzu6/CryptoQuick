export const createRequest = (url: string) => {
    return ({
        headers: {
            'Accept': 'application/json',
            'Authorization': 'id',
        },
        url: url,
    })
}
