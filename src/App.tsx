import { CssBaseline } from '@mui/material'
import {
    grey,
    pink,
} from '@mui/material/colors'
import {
    createTheme,
    ThemeProvider,
} from '@mui/material/styles'

import { Homepage } from './modules'
import { Authorization } from './redux/Authorization'

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
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <main>
                <Homepage />
                <Authorization />
            </main>
        </ThemeProvider>

    )
}

export default App
