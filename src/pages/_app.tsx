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
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //

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
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
}
export default MyApp