import { Grid } from '@mui/material'

import { CoinCard } from '../../components/CoinCard'
import { useGetCryptosQuery } from '../../pages/api/cryptoApi'

export const Cryptocurrencies: React.FunctionComponent = () => {
    const response = useGetCryptosQuery(100)

    if (response.isLoading) {
        return (
            <p>
                Loading
            </p>
        )
    }

    return (
        <Grid
            alignItems="center"
            container={true}
            direction="row"
            justifyContent="center"
            p={10}
            rowSpacing={2}
            spacing={5}
        >
            {response.data?.data.map((coin) => {
                const { id, name, quotes, rank, symbol } = coin

                return (
                    <CoinCard
                        key={id}
                        name={name}
                        price={quotes.USD.price}
                        rank={rank}
                        symbol={symbol}
                    />
                )
            })}
        </Grid>
    )
}
