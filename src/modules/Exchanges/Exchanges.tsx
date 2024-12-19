import {
    Box,
    Link,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import millify from 'millify'
import * as React from 'react'

import { Loading } from '../../components'
import { useGetExchangesQuery } from '../../pages/api'

import {
    StyledTableCell,
    StyledTableRow,
} from './Exchanges.styles'

export const Exchanges = () => {
    const { data, isLoading } = useGetExchangesQuery()

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <TableContainer
                sx={{
                    maxWidth: 1000,
                    minWidth: 700,
                    padding: 5,
                }}
            >
                <Table>
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
                        {data?.map((exchange, index) => {
                            return (
                                <StyledTableRow key={exchange.id}>
                                    <StyledTableCell>
                                        {index + 1}
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
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
