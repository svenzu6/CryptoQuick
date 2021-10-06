import { token } from '../variables'

export const createRequest = (url: string) => {
    return ({
        headers: {
            'Accept': 'application/json',
            'Authorization': token,
        },
        url: url,
    })
}
