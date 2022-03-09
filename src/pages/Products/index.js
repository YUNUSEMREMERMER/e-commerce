import React from 'react'
import Card from '../../components/Card'
import { Grid } from '@chakra-ui/react'
import { useQuery } from 'react-query'

function Products() {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:4000/product').then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;


    return (
        <div>

            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                {
                    data.map(product => (
                        <Card key={product._id} product={product} />
                    ))
                }
            </Grid>




        </div>
    )
}

export default Products