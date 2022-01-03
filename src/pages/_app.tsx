import { CssBaseline } from '@mui/material'
import GlobalStyles from '@mui/material/GlobalStyles'
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

const inputGlobalStyles = (
    <GlobalStyles
        styles={{
            '#__next': {
                height: '100%',
            },
            'body': {
                height: '100%',
            },
            'html': {
                height: '100%',
            },
        }}
    />
)
function MyApp({ Component, pageProps }: AppProps) {
    const theme = createTheme()

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {inputGlobalStyles}
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