import React, { useEffect } from 'react'
import {
    useDispatch,
    useSelector,
} from 'react-redux'

import {
    getHashParams as getHashParameters,
    removeHashParamsFromUrl as removeHashParametersFromUrl,
} from '../utils/hashUtils'

import {
    getAuthorizeHref,
    selectIsLoggedIn,
    selectTokenExpiryDate,
    setAccessToken,
    setLoggedIn,
    setTokenExpiryDate,
} from './oauthConfig'

const hashParameters = getHashParameters()
const access_token = hashParameters.access_token
const expires_in = hashParameters.expires_in

removeHashParametersFromUrl()

export function Authorization() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const tokenExpiryDate = useSelector(selectTokenExpiryDate)
    const dispatch = useDispatch()

    useEffect(() => {
        if (access_token) {
            dispatch(setLoggedIn(true))
            dispatch(setAccessToken(access_token))
            dispatch(setTokenExpiryDate(Number(expires_in)))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div>
                {!isLoggedIn && (
                    <button
                        aria-label="Log in using OAuth 2.0"
                        onClick={() => window.open(getAuthorizeHref(), '_self')}
                    >
                        Log in with Spotify
                    </button>
                )}
                {isLoggedIn && (
                    <div>
                        Token expiry date:
                        {' '}
                        {tokenExpiryDate}
                    </div>
                )}
            </div>
        </div>
    )
}