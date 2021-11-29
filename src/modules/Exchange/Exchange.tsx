import {
    Box,
    Link,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import millify from 'millify'
import * as React from 'react'

import { useGetExchangesQuery } from '../../pages/api/geckoApi'
import type { ExchangesStats } from '../../pages/api/types/getExchanges'

export const Exchange = () => {
    const { data } = useGetExchangesQuery()

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },

    }))

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },

        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    }))

    return (
        <Box
            sx={{ alignItems: 'center',
                display: 'flex',
                justifyContent: 'center' }}
        >
            <TableContainer
                sx={{ maxWidth: 1000, minWidth: 700, padding: 5 }}
            >
                <Table
                    aria-label="customized table"
                >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell />
                            <StyledTableCell />
                            <StyledTableCell>
                                Exchanges
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                24h Volume
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Web Page
                            </StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((exchange: ExchangesStats) => {
                            return (
                                <StyledTableRow key={exchange.id}>
                                    <StyledTableCell>
                                        {exchange.rank}
                                        .
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <img
                                            height={30}
                                            src={exchange.image}
                                        />

                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {exchange.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {millify(exchange.tradeVolume)}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Link href={exchange.url}>
                                            {exchange.url}
                                        </Link>
                                    </StyledTableCell>
                                </StyledTableRow>
                            )
                        }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
