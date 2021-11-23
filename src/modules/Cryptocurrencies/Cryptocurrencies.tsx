import {
    Box,
    CircularProgress,
    Grid,
    TextField,
} from '@mui/material'
import React, {
    useEffect,
    useState,
} from 'react'

import { CoinCard } from '../../components/CoinCard'
import { useGetListQuery } from '../../pages/api/geckoApi'
import type { GetListType } from '../../pages/api/types'

export const Cryptocurrencies: React.FunctionComponent = () => {
    const { data, isLoading } = useGetListQuery('100')
    console.log(data)
    const [cryptos, setCryptos] = useState<GetListType[]>([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const filteredData = data?.filter((item) => item.name.toLowerCase().includes(searchTerm))
        setCryptos(filteredData)
    }, [data, searchTerm])

    if (isLoading) return (<CircularProgress />)

    return (
        <>
            <Box
                sx={{
                    alignContent: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: 5,
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Search Crypto"
                    onChange={(event) => {
                        setSearchTerm(event.target.value.toLowerCase())
                    }}
                    size="small"
                    variant="outlined"
                />
            </Box>
            <Grid
                alignItems="center"
                container={true}
                direction="row"
                justifyContent="center"
                p={10}
                rowSpacing={2}
                spacing={5}
            >
                {cryptos?.map((coin) => {
                    const { current_price, id, image, market_cap,
                        market_cap_change_percentage_24h, market_cap_rank, name } = coin

                    return (
                        <CoinCard
                            change={market_cap_change_percentage_24h}
                            image={image}
                            key={id}
                            market_cap={market_cap}
                            name={name}
                            price={current_price}
                            rank={market_cap_rank}
                        />
                    )
                })}
            </Grid>
        </>
    )
}
