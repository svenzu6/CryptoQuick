import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from './store'

interface AuthorizationState {
    loggedIn: boolean
    accessToken: string
    tokenExpiryDate: string
  }

const initialState: AuthorizationState = {
    accessToken: '',
    loggedIn: false,
    tokenExpiryDate: '',
}

export const authSlice = createSlice({
    initialState: initialState,
    name: 'authorization',
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload
        },
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.loggedIn = action.payload
        },
        setTokenExpiryDate: (state, action: PayloadAction<number>) => {
            const date = new Date()
            date.setSeconds(date.getSeconds() + action.payload)
            state.tokenExpiryDate = date.toISOString()
        },
    },
})

export const { setAccessToken, setLoggedIn, setTokenExpiryDate } = authSlice.actions

export const selectIsLoggedIn = (state: RootState) => state.authorization.loggedIn
export const selectAccessToken = (state: RootState) => state.authorization.accessToken
export const selectTokenExpiryDate = (state: RootState) => state.authorization.tokenExpiryDate

export default authSlice.reducer

const authEndpoint = 'https://accounts.spotify.com/authorize'

const scopes = [
    'user-read-private',
    'user-top-read',
    'playlist-read-private',
    'playlist-read-collaborative',
]

export const getAuthorizeHref = (): string => {
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const redirectUri = process.env.REACT_APP_REDIRECT_URI

    // eslint-disable-next-line max-len
    return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`
}