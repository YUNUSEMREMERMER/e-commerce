import React from 'react'
import { Box, Image, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Card({ product }) {
    const { title, photos, createdAt, price, _id } = product;

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
            <Link to={`/product/${_id}`}>
                <Image src={photos[0]} alt='product' loading='lazy' />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        {new Date(createdAt).toLocaleDateString()}
                    </Box>
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                        {title}
                    </Box>
                    <Box>{price} TL</Box>

                </Box>

            </Link>
            <Button colorScheme="pink">Add to basket</Button>

        </Box>
    )
}

export default Card