import React from 'react'
import Card from '../../components/Card'
import { Grid, Box, Flex } from '@chakra-ui/react'
import { useInfiniteQuery } from 'react-query'
import { fetchProductList } from '../../api'

function Products() {
    const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery('products', fetchProductList,
        {
            getNextPageParam: (lastGroup, allGroups) => {
                const morePagesExist = lastGroup?.length === 12;
                if (!morePagesExist) {
                    return;
                }

                return allGroups.length + 1;
            }
        }
    );
    //?? burdaki kullanımla productDetail sayfasındaki kullanım neden farklı

    if (status === "loading") return 'Loading...';

    if (status === "error") return 'An error has occurred: ' + error.message;


    return (
        <div>

            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                {/* {
                    data.map(product => (
                        <Card key={product._id} product={product} />
                    ))
                } */}

                {
                    data.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {
                                group.map((item) => (
                                    <Box w="100%" key={item._id}>
                                        <Card product={item}></Card>

                                    </Box>
                                ))
                            }
                        </React.Fragment>

                    ))
                }


            </Grid>

            <Flex mt="10" justifyContent="center">
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                </button>
            </Flex>

        </div>
    )
}

export default Products