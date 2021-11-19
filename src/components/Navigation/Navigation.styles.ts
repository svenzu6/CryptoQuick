import Chip from '@mui/material/Chip'
import {
    emphasize,
    styled,
} from '@mui/material/styles'

export const Breadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800]

    return {
        '&:active': {
            backgroundColor: emphasize(backgroundColor, 0.12),
            boxShadow: theme.shadows[1],
        },
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        backgroundColor: backgroundColor,
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        height: theme.spacing(3),
    }
}) as typeof Chip