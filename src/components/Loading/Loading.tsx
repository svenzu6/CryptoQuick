import {
    Box,
    CircularProgress,
} from '@mui/material'

export const Loading: React.FunctionComponent = () => {
    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
            }}
        >
            <CircularProgress />
        </Box>
    )
}