import { CssBaseline } from '@mui/material'
import {
    grey,
    pink,
} from '@mui/material/colors'
import {
    createTheme,
    ThemeProvider,
} from '@mui/material/styles'
import type {
    AppContext,
    AppProps,
} from 'next/app'
import App from 'next/app'
import { Provider } from 'react-redux'

import { Navigation } from '../components/Navigation'
import { store } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
    const theme = createTheme({
        palette: {
            primary: {
                main: pink[100],
            },
            secondary: {
                main: grey[900],
            },
        },
    })

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navigation />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>

    )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
}

export default MyApp